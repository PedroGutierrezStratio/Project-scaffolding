'use strict';

const gulp = require('gulp');

const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const es = require('event-stream');
const gulpif = require('gulp-if');
const inject = require('gulp-inject');
const jscs = require('gulp-jscs');
const jshint = require('gulp-jshint');
const Karma = require('karma').Server;
const ngAnnotate = require('gulp-ng-annotate');
const plumber = require('gulp-plumber');
const prefix = require('gulp-autoprefixer');
const proxyMiddleware = require('http-proxy-middleware');
const reload = browserSync.reload;
const runSequence = require('gulp-run-sequence');
const sass = require('gulp-sass');
const settings = require('./gulp.config');
const sourcemaps = require('gulp-sourcemaps');
const templateCache = require('gulp-angular-templatecache');
const uglify = require('gulp-uglify');

const path = settings.path;
const patterns = settings.patterns;
const assets = settings.assets;

// Complex Paths
function _getAllJsInOrder(path) {
   return [
      path + patterns.allModuleJS,
      path + patterns.allJS,
      '!' + path + patterns.allTestJS,
      '!' + path + patterns.allVendorJS
   ];
}

// SASS - Recollection of all .sass files for each module.
gulp.task('sass', function() {
   return gulp.src(path.origin.baseSass + patterns.mainSass)
      .pipe(plumber({
         errorHandler: function(error) {
            console.log(error.message);
            this.emit('end');
         }
      }))
      .pipe(inject(gulp.src(path.origin.modulesSass + patterns.allSCSS, {read: false}), {
         starttag: '/* inject:modules */',
         endtag: '/* endinject */',
         transform: function(filepath) {
            return '@import ".' + filepath + '";';
         }
      }))
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compact'}))
      .pipe(cleanCSS({keepBreaks: true}))
      .pipe(prefix('last 2 version', '> 1%', 'ie 8', 'ie 7'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.temporary.css))
      .pipe(browserSync.stream({match: patterns.allCSS}));
});

// JS + AngularTemplateCache - Recollection, concatenation and uglify of all .js
gulp.task('js:dist', function() {
   var allJs = gulp.src(_getAllJsInOrder(path.temporary.js));
   var angularTemplateCache = gulp.src([
      path.origin.folder + patterns.allHTML,
      '!' + path.origin.index
   ]).pipe(templateCache({module: path.moduleName}));

   return es.merge(allJs, angularTemplateCache)
      .pipe(sourcemaps.init())
      .pipe(concat(path.dist.resultJS))
      .pipe(gulp.dest(path.dist.js))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(babel({presets: ['es2015']}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.dist.js));
});
gulp.task('js:dist:vendor', function() {
   return gulp.src([
         path.temporary.jsVendor + patterns.angular,
         path.temporary.jsVendor + patterns.allJS
      ])
      .pipe(sourcemaps.init())
      .pipe(concat(path.dist.resultJSVendors))
      .pipe(gulp.dest(path.dist.js))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.dist.js));
});

// JS Lint - JSCS + JSHint
gulp.task('jslint', function() {
   return gulp.src(path.origin.folder + patterns.allJS)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jscs())
      .pipe(jscs.reporter());
});

// Clean - Remove the temporary folder and distribution folder
gulp.task('clean', ['clean:tmp', 'clean:dist']);
gulp.task('clean:tmp', function() {
   return gulp.src(path.temporary.folder, {read: false})
      .pipe(clean(path.temporary.folder));
});
gulp.task('clean:dist', function() {
   return gulp.src(path.dist.folder, {read: false})
      .pipe(clean(path.dist.folder));
});

// Copy
gulp.task('copy:folder:dist', ['clean:dist'], function() {
   return gulp.src([
         path.temporary.resources + patterns.all,
         path.temporary.css + patterns.all,
         path.temporary.index
      ], {base: path.temporary.folder})
      .pipe(gulp.dest(path.dist.folder));
});
gulp.task('copy:dev', ['copy:resources', 'copy:index', 'copy:html', 'copy:js', 'copy:js:vendor']);
gulp.task('copy:resources', function() {
   return gulp.src(path.origin.resources + patterns.all)
      .pipe(gulp.dest(path.temporary.resources));
});
gulp.task('copy:js', function() {
   return gulp.src(_getAllJsInOrder(path.origin.folder))
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest(path.temporary.js));
});
gulp.task('copy:js:vendor', function() {
   return gulp.src(assets.js)
      .pipe(gulp.dest(path.temporary.jsVendor));
});
gulp.task('copy:html', function() {
   return gulp.src([path.origin.folder + patterns.allHTML, '!' + path.origin.index])
      .pipe(gulp.dest(path.temporary.folder));
});
gulp.task('copy:index', function() {
   return gulp.src(path.origin.index)
      .pipe(gulp.dest(path.temporary.folder));
});

// Dependency injection - Dev
gulp.task('inject:dev', function() {
   var cssSources = gulp.src(path.temporary.css + patterns.allCSS, {read: false});

   var jsSources = gulp.src(_getAllJsInOrder(path.temporary.js), {read: false});
   var jsVendors = gulp.src([
      path.temporary.js + patterns.angular,
      path.temporary.js + patterns.allVendorJS
   ], {read: false});

   return gulp.src(path.temporary.index)
      .pipe(inject(jsSources, {relative: true}))
      .pipe(inject(jsVendors, {name: 'vendors', relative: true}))
      .pipe(inject(cssSources, {relative: true}))
      .pipe(gulp.dest(path.temporary.folder));
});
gulp.task('inject:dist', ['copy:dev', 'sass'], function() {
   var jsSources = gulp.src(path.dist.js + path.dist.resultJS, {read: false});
   var jsVendors = gulp.src(path.dist.js + path.dist.resultJSVendors, {read: false});
   var cssSources = gulp.src(path.dist.css + patterns.allCSS, {read: false});

   return gulp.src(path.dist.index)
      .pipe(inject(jsSources, {relative: true}))
      .pipe(inject(jsVendors, {name: 'vendors', relative: true}))
      .pipe(inject(cssSources, {relative: true}))
      .pipe(gulp.dest(path.dist.folder));
});

// Serve
gulp.task('sync', function() {
   return browserSync.init(null, {
      server: path.temporary.folder,
      notify: false,
      open: false,
      port: 3000
   });
});
gulp.task('serve', function() {

   runSequence('build:dev', 'sync', 'test:watch');

   gulp.watch([path.origin.index], ['copy:index', 'inject:dev', reload]);
   gulp.watch([path.origin.folder + patterns.allHTML, '!' + path.origin.index], ['copy:html', reload]);
   gulp.watch([path.origin.folder + patterns.allSCSS], ['sass']);
   gulp.watch(_getAllJsInOrder(path.origin.folder), ['copy:js', 'copy:index', 'inject:dev', 'jslint', reload]);
   gulp.watch([path.origin.resources + patterns.all], ['copy:resources', reload]);
});

// Test
gulp.task('test', ['jslint'], function (done) {
   new Karma({
      configFile: __dirname + path.config.karma,
      singleRun: true
   }, function (exitCode) {
      done();
      process.exit(exitCode);
   }).start();
});
gulp.task('test:watch', ['jslint'], function (done) {
   new Karma({
      configFile: __dirname + path.config.karma,
      autoWatch: true,
      singleRun: false
   }).start();
});

// Build
gulp.task('build:dev', function(cb) {
   runSequence(
      'clean:tmp',
      ['copy:dev', 'sass'],
      'inject:dev',
   cb);
});
gulp.task('build', function(cb) {
   runSequence(
      'clean',
      ['copy:dev', 'sass'],
      'copy:folder:dist',
      ['js:dist','js:dist:vendor'],
      'inject:dist',
   cb);
});

gulp.task('default', ['build']);
