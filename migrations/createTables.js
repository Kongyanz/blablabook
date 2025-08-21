import dotenv from 'dotenv';
import sequelize from '../app/models/sequelize.js';
import { AppUser, Author, Gender, Book, AppUserBook }  from '../app/models/association.js';

dotenv.config();
await sequelize.drop();
await sequelize.sync({ force: true });
console.log('Base réinitialisée ✅');
await sequelize.close();
