module.exports = function(config) {

   const settings = require('./gulp.config');

   const path = settings.path;
   const patterns = settings.patterns;
   const assets = settings.assets;

   const karmaConf = {
      browsers: ['PhantomJS'],
      frameworks: ['jasmine'],
      files: [
         ...assets.js,
         ...assets.jsTest,
         path.origin.folder + patterns.allModuleJS,
         path.origin.folder + patterns.allJS,
         path.origin.folder + patterns.allHTML
      ],
      preprocessors: {},
      babelPreprocessor: {
         options: {
            presets: ['es2015'],
            sourceMap: 'inline'
         }
      },
      reporters: ['progress', 'coverage'],
      coverageReporter: {
         dir: path.coverage.folder,
         reporters: [
            {type: 'html', subdir: 'html'},
            {type: 'lcovonly', subdir: '.', file: 'icov.info'}
         ]
      },
      colors: true,
      ngHtml2JsPreprocessor: {
         stripPrefix: path.origin.folder,
         moduleName: path.moduleCoreName
      }
   };

   karmaConf.preprocessors[path.origin.folder + patterns.allModuleJS] = ['babel'];
   karmaConf.preprocessors[path.origin.folder + patterns.allJSExcludeTest] = ['coverage','babel'];
   karmaConf.preprocessors[path.origin.folder + patterns.allTestJS] = ['babel'];
   karmaConf.preprocessors[path.origin.folder + patterns.allHTML] = ['ng-html2js'];

   config.set(karmaConf);
};
