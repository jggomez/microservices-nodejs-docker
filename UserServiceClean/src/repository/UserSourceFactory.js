'use strict';

const UserCacheSource = require('./UserCacheSource');
const UserDataSource = require('./UserDataSource');

module.exports = class extends UserDataSource {
    crearCacheSource() {
        return new UserCacheSource();
    }
};


