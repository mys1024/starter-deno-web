import { MongoClient } from "../deps.ts";
import { DB_URI } from "../config.ts";
import output from "../utils/output.ts";

output.info(`Connecting to the database.`);
const db = await new MongoClient().connect(DB_URI);
output.info("Connected to the database.");

export default db;
