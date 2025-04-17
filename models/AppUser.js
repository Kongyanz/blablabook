import {DataTypes, Model} from "sequelize";
import sequelize from "./sequelize.js";

class AppUser extends Model {}

AppUser.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
{
    sequelize,
    modelName: "AppUser",
    tableName: "app_user",
   
})

export default AppUser;