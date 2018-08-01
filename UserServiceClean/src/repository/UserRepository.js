'use strict';

const UserRepository = require('../domain/repositories/UserRepository');

module.exports = class extends UserRepository {
    constructor(userSourceFactory) {
        super();
        this.userSourceFactory = userSourceFactory;
    }

    save(user) {
        const userDataSource = this.userSourceFactory.crearCacheSource();
        return userDataSource.save(user);
    }

    remove(idUser) {
        const userDataSource = this.userSourceFactory.crearCacheSource();
        return userDataSource.remove(idUser);
    }

    get(idUser) {
        const userDataSource = this.userSourceFactory.crearCacheSource();
        return userDataSource.get(idUser);
    }

    all() {
        const userDataSource = this.userSourceFactory.crearCacheSource();
        return userDataSource.all();
    }
};
