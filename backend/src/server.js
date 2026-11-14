import Hapi from "@hapi/hapi";
import prisma from "./config/prisma.js";
//import registerRoutes from "./routes/index.js";

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost", //probably gonna changed to be www.cartshare.com
  });

  const count = await prisma.cart.findMany();
  console.log ("count: ", count)

//   const personal = await prisma.cart.upsert({
//         where: { name: 'PERSONAL',
//           joinCode: "meh"
//         },
//         update: {},
//         create: { name: 'PERSONAL',
//           joinCode: "meh"
//          },
//     });

//   const item1 = await prisma.item.create({
//     data: {
//         name: 'Buy bread',
//         cartId: personal.id,
//     },
// });

 // console.log("made or wha?", {personal, item1} )

  await server.route({ //health
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

  await server.route( //example
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

  await server.route(
    {
    //get method
    method: "GET",
    path: "/carts",
    handler: (request, h) => {
      return {
        message: "here is the list of carts:" + count,
      };
    },
  });

  await server.route(
    {
    //get method
    method: "GET",
    path: "/cart/{cartId}",
    handler: (request, h) => {
      return {
        message: "here is the list of carts:" + prisma.cart.findUnique( {
          where: {id: cartId}
      }),

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

init()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
