import "dotenv/config"; //required to load .env in

import { PrismaPg } from "@prisma/adapter-pg"; //driver adapter —> lets Prisma talk to Postgres via 'pg' library instead of own engine
import { PrismaClient } from "@prisma/client"; //generated client —> actual query builder (prisma.cart.findMany etc)

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL }); //opens the DB connection (wraps connection string in adapter instance)

const prisma = new PrismaClient({ adapter }); //client instance, use adapter instead of default engine

export default prisma;
