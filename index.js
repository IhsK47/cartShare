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
        handler: (request, h) => { //req is incoming, h is output
                        return {
                status: "OK",
                timestamp: new Date().toISOString(),
                message: "cartshare backend is running"
            };
        },
    });

    await server.route({
        method: "POST",
        path: "/example",
        handler: (request, reply) => {

            // const wtv = request.payload.fieldname
            //map
            //service layer i.e. prisma logic

            return reply.response({
                message: ""
            }).code(201)


        }
    })


    await server.start(); //wakeup hapi.js and get
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();