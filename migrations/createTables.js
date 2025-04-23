import { AppUser, Author, Gender, Book, AppUserBook }  from '../../models/association.js';
import sequelize from '../../models/sequelize.js';
import { AppUser, Author, Gender, Book, AppUserBook }  from '../../models/association.js';



await sequelize.drop(); 
await sequelize.sync({ force: true });
