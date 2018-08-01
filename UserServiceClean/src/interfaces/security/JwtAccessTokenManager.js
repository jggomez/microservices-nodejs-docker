'use strict';

const jwt = require('jsonwebtoken');
const AccessTokenManager =
    require('../../domain/security/AccessTokenManager');
const JWT_SECRET_KEY = 'shhhhhh!';

module.exports = class extends AccessTokenManager {
    generate(payload) {
        return jwt.sign(payload, JWT_SECRET_KEY);
    }

    decode(accessToken) {
        return jwt.verify(accessToken, JWT_SECRET_KEY);
    }
};
