import { Router } from 'express';
import * as dotenv from 'dotenv';
import mariadb  from 'mariadb';

dotenv.config();

const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;

export const pool = mariadb.createPool({
    host: host,
    database: database,
    port: port, 
    user: username, 
    password: password,
    connectionLimit: 100
});

export function getConnection() {
    return new Promise(function (res, rej) {
        pool.getConnection()
        .then(function (conn) {
          res(conn);
        })
        .catch(function (error) {
          rej(error);
        });
    });
}