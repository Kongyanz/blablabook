import {DataTypes, Model} from "sequelize";
import sequelize from "./sequelize.js";

class Author extends Model {}

Author.init({
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
    }}
,
{
    sequelize,
    modelName: "Author",
    tableName: "author",
    timestamps: false
})

export default Author;