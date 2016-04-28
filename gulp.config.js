
var assets = {
   js: [
      './node_modules/jquery/dist/jquery.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-animate/angular-animate.js',
      './node_modules/angular-resource/angular-resource.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js'
   ],
   css: [],
   fonts: []
};

var path = {
   //origin files and folder
   origin: {
      index: 'src/index.html',
      folder: 'src/',
      images: 'src/resources/images/',
      resources: 'src/resources/',
      baseSass: 'src/styles/',
      modulesSass: 'src/!(styles)/',
      favicon: 'src/favicon.ico'
   },
   //destination files and folder
   dist: {
      folder: 'dist/',
      buildFolder: 'dist/'
   },
   temporary: {
      index: '.tmp/index.html',
      folder: '.tmp/',
      js: '.tmp/js/',
      jsVendor: '.tmp/js/vendors',
      css: '.tmp/css/',
      html: '.tmp/html/',
      resources: '.tmp/resources/'
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
   allJSMap: '**/*.js.map',
   allSCSS: '**/*.scss',
   allCSS: '**/*.css',
   allCSSMap: '**/*.css.map',
   allHTML: '**/*.html',
   mainSass: 'main.scss'
};

module.exports = {
   path: path,
   patterns: patterns,
   assets: assets
};
