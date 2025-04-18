import sequelize from '../models/sequelize.js';
import { AppUser, Book, Gender, AppUserBook, Author } from '../models/association.js';

await sequelize.drop(); 
await sequelize.sync({ force: true });
