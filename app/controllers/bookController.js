import sequelize from "../models/sequelize.js";
import { Book } from "../models/association.js";

export const bookController = {
  async getBookDetails(req, res) {
    try {
      const bookId = req.params.id;
      const book = await Book.findByPk(bookId, {
        include: ["authors", "gender"],
      });
      if (!book) {
        return res.status(404).send("Livre non trouvé");
      }
      res.render("book-detailes", { book });
    } catch (error) {
      console.error("Erreur lors de la récupération du livre :", error);
      res.status(500).send("Erreur serveur");
    };

},
 
   async getAllBooks(req, res) {
    try {
    const books = await Book.findAll({
      include: [
        { association: "authors" },
        { association: "gender" },
      ],
    });
    res.render("library", {
        books, // Liste des livres récupérée
        library: "Bibliothèque", 
      });
    } catch (error) {
      console.error("Erreur lors de la récupération des livres :", error);
      res.status(500).send("Erreur serveur");
    }
  },
};

   
  
