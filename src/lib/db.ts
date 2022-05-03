import {DataSource} from 'typeorm'
import {Client} from '../entities/Client.entities'
require('dotenv').config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.LLATAN_TORM_HOST,
  port: 3306, //5432
  username: process.env.LLATAN_TORM_USER,
  password: process.env.LLATAN_TORM_PASSWORD,
  database: process.env.LLATAN_TORM_DB,
  synchronize: true,
  logging: true,
  entities: [Client],
  subscribers: [],
  migrations: [],
})