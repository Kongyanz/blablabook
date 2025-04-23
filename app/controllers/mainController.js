import sequelize from "../models/sequelize.js"
import { Book } from "../models/association.js";

export  const mainController ={
    async renderHomePage(req,res){
        const books = await Book.findAll({
            order: sequelize.random(),
            limit: 4,
            include: [
                {
                    association: "authors",
                },
                {
                    association: "gender",
                },
            ]
        });

        res.render("home", {books});
    }
};

export default mainController;


