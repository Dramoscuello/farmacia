var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'farmacia'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://localhost/dbfarmacia2'
  },

  test: {
    root: rootPath,
    app: {
      name: 'farmacia'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://localhost/farmacia-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'farmacia'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://localhost/farmacia-production'
  }
};

module.exports = config[env];
