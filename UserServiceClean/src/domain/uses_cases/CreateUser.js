'use strict';

const User = require('../models/User');

/**
 * Get User By Id.
 */
class CreateUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    setUser(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    execute() {
        const user = new User(this.firstName, this.lastName, this.email);
        return this.userRepository.save(user);
    }
}

module.exports = CreateUser;
