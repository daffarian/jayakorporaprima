import mysql, {ConnectionOptions, RowDataPacket} from 'mysql2/promise';
import { env   } from 'process';
const config:ConnectionOptions = {
  host: env.DB_HOST,
  database: env.DB_DATABASE,
  user: env.DB_USER,
  password: env.DB_PASSWORD
};

export const db = mysql.createConnection(config);

// pool.query('SELECT * FROM TEST', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
