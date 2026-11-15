// Reserved for route registration when the API is split into separate files.

import * as handler from "../handlers.js"

export default function registerRoutes(server) {
  server.route({
    method: "GET",
    path: "/health",
    handler: handler.getHealth(),
  });
}