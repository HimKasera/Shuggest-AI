import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Ensure DATABASE_URL is set
// if (!process.env.DATABASE_URL) {
//   throw new Error(
//     "DATABASE_URL is not defined. Make sure it's set in your .env.local file."
//   );
// }

// Debugging: Print DATABASE_URL to check if it's loaded correctly
console.log("Database URL:", process.env.DATABASE_URL);

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql, { schema });
