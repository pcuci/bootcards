Package.describe({
  name: 'pcuci:bootcards',
  summary: 'A cards-based UI with dual-pane capability for mobile and desktop, built on top of Bootstrap',
  version: '1.0.0'
});

Package.on_use(function (api) {
  /* Use or imply other packages.

   * Example:
   *  api.use('ui', 'client');
   *  api.use('iron-router', ['client', 'server']);
   */

   /*
    * Add files that should be used with this
    * package.
    */
  api.addFiles([
    'bootcards/dist/css/bootcards-desktop.min.css',
    'bootcards/dist/css/bootcards-android.min.css',
    'bootcards/dist/css/bootcards-ios.min.css',
    'bootcards/dist/fonts/icomoon.eot',
    'bootcards/dist/fonts/icomoon.svg',
    'bootcards/dist/fonts/icomoon.ttf',
    'bootcards/dist/fonts/icomoon.woff',
    'bootcards/dist/js/bootcards.min.js'
    ], 'client', {bare: true});

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
});

Package.on_test(function (api) {
  api.use('bootcards');
  api.use('tinytest');

  api.add_files('bootcards_tests.js');
});
