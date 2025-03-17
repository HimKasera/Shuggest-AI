

/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';
dotenv.config({path: '.env.local'}); // Load environment variables from .env.local file
const DB_PATH = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;


export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_gn8ma4jGiZKx@ep-still-bread-a546wjyc-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
    },
};
