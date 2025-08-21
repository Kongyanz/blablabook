import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize(process.env.PG_URL, {
  //host: process.env.DB_HOST,
  //port: process.env.PGPORT,
  dialect: "postgres",
  define: {
  timestamps: false,
  underscored: true
  },
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
export default sequelize;
