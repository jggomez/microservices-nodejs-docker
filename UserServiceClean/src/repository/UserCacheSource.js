'use strict';

const User = require('../domain/models/User');
const UserDataSource = require('./UserDataSource');

module.exports = class extends UserDataSource {
    _initializeRepositoryWithTwoUsers() {
        const juan = new User(null, 'Juan', 'Gómez',
            'juan.gomez01@gmail.com');
        const pedro = new User(null, 'Pedro', 'Torres',
            'pedro.torres@gmail.com');
        this.save(juan).then(() => this.save(pedro))
            .catch((err) => console.log(err));
    }

    _dataAsArray() {
        return Object.keys(this.data).map((key) => this.data[key]);
    }

    constructor() {
        super();
        this.index = 1;
        this.data = {};
        this._initializeRepositoryWithTwoUsers();
    }

    save(user) {
        const row = Object.assign({}, user);
        const rowId = this.index++;
        row.id = rowId;
        this.data[rowId] = row;
        return Promise.resolve(row);
    }

    remove(idUser) {
        delete this.data[idUser];
        return Promise.resolve();
    }

    get(idUser) {
        return Promise.resolve(this.data[idUser]);
    }

    all() {
        return Promise.resolve(this._dataAsArray());
    }
};
