import Hapi from "@hapi/hapi";

import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })



const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost", //probably gonna changed to be www.cartshare.com
  });

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

  await server.route({
    //get method
    method: "GET",
    path: "/hello/{name}",
    handler: (request, h) => {
      return {
        message: "hello," + request.params.name,
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
          message: "w",
        })
        .code(201);
    },
  });

  await prisma.$connect(); 
  await server.start(); //wakeup hapi.js and get
  console.log("Server running on %s", server.info.uri);

  //prisma.Cart.findMany( {})
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
