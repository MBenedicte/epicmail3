import pg from 'pg';
import dotenv from 'dotenv'

dotenv.config();

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD

});

pool.on('connect',()=>{
  console.log('Connected successfully')
})

export default pool;
