'use strict';

const _serializeSingleUser = (user) => {
    return {
        'id': user.id,
        'firstName': user.firstName,
        'lastName': user.lastName,
        'email': user.email,
    };
};

module.exports = class {
    serialize(data) {
        if (!data) {
            throw new Error('Invalid Data');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }
};
