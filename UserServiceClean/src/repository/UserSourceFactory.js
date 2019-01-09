'use strict';

const UserCacheSource = require('./UserCacheSource');
const UserPubSubSource = require('./UserPubSubSource');
const UserDataSource = require('./UserDataSource');

module.exports = class extends UserDataSource {
    crearCacheSource() {
        return new UserCacheSource();
    }

    crearPubSubSource() {
        return new UserPubSubSource();
    }
};


