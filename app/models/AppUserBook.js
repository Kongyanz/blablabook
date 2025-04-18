import {DataTypes, Model} from "sequelize";
import sequelize from "./sequelize.js";

class AppUserBook extends Model {}

AppUserBook.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "to-read"
    },
},
{
    sequelize,
    modelName: "AppUserBook",
    tableName: "app_user_book",
   
})

export default AppUserBook;