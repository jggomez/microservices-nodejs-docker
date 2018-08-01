'use strict';

const UserSerializer = require('../interfaces/serializers/UserSerializer');
const CreateUser = require('../domain/uses_cases/CreateUser');
const GetUserById = require('../domain/uses_cases/GetUserById');
const UserRepository = require('../repository/UserRepository');
const UserSourceFactory = require('../repository/UserSourceFactory');

module.exports = class {
    constructor() {
        this.userSerializer = new UserSerializer();
        this.userRepository =
            new UserRepository(new UserSourceFactory());
    }

    createUser(request) {
        const { firstName, lastName, email } = request.payload;
        const useCase = new CreateUser(this.userRepository);
        useCase.setUser(firstName, lastName, email);
        return useCase.execute()
            .then((user) => this.userSerializer.serialize(user));
    }

    getUser(request) {
        const idUser = request.params.id;
        const useCase = new GetUserById(this.userRepository);
        useCase.setIdUser(idUser);
        return useCase.execute()
            .then((user) => this.userSerializer.serialize(user));
    }
};
