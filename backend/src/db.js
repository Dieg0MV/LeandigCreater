import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    port: 3307,
    user: 'root', 
    password: 'P0k3m0m0s',
    database: 'login'
});

export const dbforms = createPool({
    host: 'localhost',
    port: 3307,
    user: 'root', 
    password: 'P0k3m0m0s',
    database: 'formularios'
});