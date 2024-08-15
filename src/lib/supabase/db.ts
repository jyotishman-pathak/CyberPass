import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../../migrations/schema";
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

if (!process.env.DATABASE_URL) {
  console.log('🔴 No database URL found');
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });

const migrateDb = async () => {
  try {
    console.log('🟠 Migrating database');
    await migrate(db, { migrationsFolder: 'migrations' });
    console.log('🟢 Successfully migrated');
  } catch (error) {
    console.log('🔴 Error migrating database', error);
  }
};

migrateDb();
export default db;
