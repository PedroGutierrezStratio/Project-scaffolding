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
         path.origin.folder + patterns.allJS
      ],
      preprocessors: {},
      babelPreprocessor: {
         options: {
           presets: ['es2015'],
           sourceMap: 'inline'
         }
      },
      reporters: ['progress',  'junit', 'coverage']
   };

   karmaConf.preprocessors[path.origin.folder + patterns.allModuleJS] = ['babel'];
   karmaConf.preprocessors[path.origin.folder + patterns.allJSExcludeTest] = ['coverage','babel'];
   karmaConf.preprocessors[path.origin.folder + patterns.allTestJS] = ['babel'];

   config.set(karmaConf);
};
