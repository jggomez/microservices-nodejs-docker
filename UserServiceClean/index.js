'use strict';

const createServer =
    require('./src/infrastructure/server');

const start = async () => {
    try {
        const server = await createServer();
        await server.start();

        console.log('Server running at:', server.info.uri);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
};

start();
