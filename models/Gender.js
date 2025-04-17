import {DataTypes, Model} from "sequelize";
import sequelize from "./sequelize.js";

class Gender extends Model {}

Gender.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, 
{
    sequelize,
    modelName: "Gender",
    tableName: "gender",
    timestamps: false
})

export default Gender;