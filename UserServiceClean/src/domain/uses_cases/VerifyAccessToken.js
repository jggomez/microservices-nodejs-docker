'use strict';

module.exports = class {
    constructor(accessTokenManager) {
        this.accessTokenManager = accessTokenManager;
    }

    execute(accessToken) {
        const decoded = this.accessTokenManager.decode(accessToken);
        return new Promise((resolve, reject) => {
            if (!decoded) {
                return reject(new Error('Invalid access token'));
            }
            return resolve({uid: decoded.uid});
        });
    }
};
