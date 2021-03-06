
var assets = {
   js: [
      //'./node_modules/jquery/dist/jquery.js',
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-sanitize/angular-sanitize.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-resource/angular-resource.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-translate/dist/angular-translate.js'
   ],
   jsTest: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './src/core/core.*.spec.js'
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
      translationFolder: 'src/resources/langs/',
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
      resultJSVendors: 'vendors.js',
      exclusions: {
         js: [
            'mocks/**/!(*.module).js',
            '**/*.mock.js'
         ]
      }
   },
   // development files and folder
   temporary: {
      index: '.tmp/index.html',
      translationFile: 'app.translation.js',
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
   allMockJS: '**/*.mock.js',
   allVendorJS: 'vendors/*.js',
   allJSExcludeTest: '**/!(*.spec).js',
   allJSMap: '**/*.js.map',
   allJSON: '**/*.json',
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
