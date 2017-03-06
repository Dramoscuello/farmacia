var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'farmacia'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/farmacia-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'farmacia'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/farmacia-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'farmacia'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/farmacia-production'
  }
};

module.exports = config[env];
