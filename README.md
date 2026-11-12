# CartShare

CartShare is a shared shopping-list app for households, offices, and events.

## Project layout

- `backend/src/server.js` starts the Hapi API.
- `backend/src/routes/` maps HTTP endpoints to handlers.
- `backend/src/handlers.js` contains request handling and the current prototype logic.
- `backend/src/config/prisma.js` creates the Prisma/PostgreSQL client.
- `backend/prisma/` contains the database schema and migrations.
- `frontend/` is reserved for the React app; `frontend/public/` currently contains a placeholder HTML page.

The root `index.js` is kept as a convenient entry point. The package configuration and local dependencies remain at the repository root until a frontend app is added.

## Running the backend

Create a root `.env` file with `DATABASE_URL` and `DIRECT_URL`, then run:

```sh
npm start
```

For development with automatic restarts:

```sh
npm run dev
```
