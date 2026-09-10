import Hapi from "@hapi/hapi";

import prisma from "./prisma.js";


const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost", //probably gonna changed to be www.cartshare.com
  });

  const count = await prisma.Cart.findMany();

  console.log ("count: ", count)

  await server.route({
    //get method
    method: "GET",
    path: "/health",
    handler: (request, h) => {
      //req is incoming, h is output
      return {
        status: "OK",
        timestamp: new Date().toISOString(),
        message: "cartshare backend is running",
      };
    },
  });

  await server.route(
    {
    //get method
    method: "GET",
    path: "/hello/{name}",
    handler: (request, h) => {
      return {
        message: "hello," + request.params.name + count + "well",
      };
    },
  });

  await server.route({
    method: "POST",
    path: "/example",
    handler: (request, reply) => {
      // const wtv = request.payload.fieldname
      //map potentially
      //service layer i.e. prisma logic

      return reply
        .response({
          message: "w" + count,
        })
        .code(201);
    },
  });

  await prisma.$connect();
  await server.start(); //wakeup hapi.js and get
  console.log("Server running on %s", server.info.uri);


};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
