import { Pool } from 'pg';
import dotenv from 'dotenv'

dotenv.config();
const connect={
  connectionString:process.env.DATABASE_URL
}
const pool = new Pool(connect);

pool.on('connect',()=>{
  console.log('Connected successfully')
})

export default pool;
