import "reflect-metadata";
import { DataSource } from "typeorm";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import * as dotenv from "dotenv";

import { User } from "./entity/User.entity";
import { Product } from "./entity/Product.entity";
import { Guichet } from "./entity/Guichet.entity";
import { Bureau } from "./entity/Bureau.entity";
import { Feedback } from "./entity/Feedback.entity";
import { Ticket } from "./entity/Ticket.entity";
import { File } from "./entity/File.entity";

dotenv.config();

// Recréer __dirname pour ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } = process.env;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: parseInt(DB_PORT || "3306"),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Bureau, Product, Guichet, Feedback, Ticket, File],
    migrations: [path.join(__dirname, "migration", "*.ts")],
    subscribers: [],
});