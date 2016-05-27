Package.describe({
  name: 'drewy:pikaday-time',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple DateTime Picker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/drew-y/meteor-pikaday-time',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles(['Pikaday/pikaday.js', 'Pikaday/css/pikaday.css'], 'client');
});
