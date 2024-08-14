import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

if (!process.env.DATABASE_URL) {
  console.log('🔴 Cannot find database URL');
} else {
  console.log(`🟢 Database URL: ${process.env.DATABASE_URL}`);
}

const config: Config = {
  schema: './src/lib/supabase/schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || '',
  },
};

export default config;
