# CartShare

CartShare is a shared shopping-list app for households, offices, and events.

## Project layout

- `backend/app.js` is the backend entry point.
- `backend/src/server.js` starts the Hapi API.
- `backend/src/routes/` is where route registration will live.
- `backend/src/handlers.js` is reserved for request handling.
- `backend/src/config/prisma.js` creates the Prisma/PostgreSQL client.
- `backend/prisma/` contains the database schema and migrations.
- `frontend/` is reserved for the React app; `frontend/public/` currently contains a placeholder HTML page.

Backend package configuration, dependencies, and environment files live in `backend/`. Frontend files remain separate in `frontend/`.

## Running the backend

Create `backend/.env` with `DATABASE_URL` and `DIRECT_URL`, then run these commands from `backend/`:

```sh
npm start
```

For development with automatic restarts:

```sh
npm run dev
```
