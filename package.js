Package.describe({
  name: 'pcuci:bootcards',
  summary: 'A cards-based UI with dual-pane capability for mobile and desktop, built on top of Bootstrap',
  version: '1.0.0_2',
  git: 'https://github.com/pcuci/bootcards.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.3');
  api.use(['mizzao:bootstrap-3@3.3.0'], 'client');

  api.addFiles([
    'bootcards/dist/css/bootcards-desktop.min.css',
    //'bootcards/dist/css/bootcards-android.min.css',
    //'bootcards/dist/css/bootcards-ios.min.css',
    'bootcards/dist/fonts/icomoon.eot',
    'bootcards/dist/fonts/icomoon.svg',
    'bootcards/dist/fonts/icomoon.ttf',
    'bootcards/dist/fonts/icomoon.woff',
    'bootcards/dist/js/bootcards.min.js'
    ], 'client', {bare: true});
});

Package.on_test(function (api) {
  api.use('pcuci:bootcards');
  api.use('tinytest');

  api.add_files('bootcards_tests.js');
});
