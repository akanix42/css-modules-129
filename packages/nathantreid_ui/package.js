Package.describe({
  name: 'nathantreid:ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.8.0.2');
  api.use('ecmascript');
  api.use('nathantreid:css-modules@4.1.0-beta.1');
  
  api.addFiles('styles/typography.m.css', 'client');
});
