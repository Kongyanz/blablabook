import sequelize from '../models/sequelize.js';
import { 
  AppUser,
  Book,
  Gender,
  AppUserBook,
  Author
} from '../models/association.js';

// on supprime toutes les tables dont sequelize a conscience
await sequelize.drop();

// on syncronise la base de données avec les modèles dont sequelize a connaissance (création de la structure de la bdd)
await sequelize.sync({ force: true });