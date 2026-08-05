'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost', //probably gonna changed to be www.cartshare.com
    });

    await server.route({ //get method
        method: 'GET',
        path: '/health',
        handler: (request, h) => {
            return {
                status: "OK",
                timestamp: new Date().toISOString(),
                message: "cartshare backend is running"
            };
        },
    });


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();