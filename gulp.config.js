
var assets = {
   js: [
      //'./node_modules/jquery/dist/jquery.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-resource/angular-resource.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js'
   ],
   jsTest: [
      './node_modules/angular-mocks/angular-mocks.js'
   ],
   css: [
      './node_modules/egeo.ui.base/src/index.scss'
   ],
   fonts: [
      './node_modules/egeo.ui.base/dist/egeo/vendors/fonts/**/*.*',
   ]
};

var path = {
   moduleName: 'app',
   moduleCoreName: 'app.core',
   // origin files and folder
   origin: {
      index: 'src/index.html',
      folder: 'src/',
      images: 'src/resources/images/',
      resources: 'src/resources/',
      baseSass: 'src/styles/',
      modulesSass: 'src/!(styles)/',
      favicon: 'src/favicon.ico'
   },
   // destination files and folder
   dist: {
      index: 'dist/index.html',
      folder: 'dist/',
      buildFolder: 'dist/',
      js: 'dist/js/',
      css: 'dist/css/',
      resultJS: 'scripts.js',
      resultJSVendors: 'vendors.js'
   },
   // development files and folder
   temporary: {
      index: '.tmp/index.html',
      folder: '.tmp/',
      js: '.tmp/js/',
      jsVendor: '.tmp/js/vendors/',
      css: '.tmp/css/',
      resources: '.tmp/resources/',
      fonts: '.tmp/fonts/'
   },
   coverage: {
      folder: 'target/coverage'
   },
   //config files
   config: {
      karma: '/karma.conf.js'
   }
};

var patterns = {
   all: '**/*.*',
   allJS: '**/*.js',
   allModuleJS: '**/*.module.js',
   allTestJS: '**/*.spec.js',
   allVendorJS: 'vendors/*.js',
   allJSExcludeTest: '**/!(*.spec).js',
   allJSMap: '**/*.js.map',
   allSCSS: '**/*.scss',
   allCSS: '**/*.css',
   allCSSMap: '**/*.css.map',
   allHTML: '**/*.html',
   mainSass: 'main.scss',
   angular: '**/angular.js'
};

module.exports = {
   path: path,
   patterns: patterns,
   assets: assets
};
