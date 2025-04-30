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
		}
	},

	async getPaginatedBooks(req, res) {
		const page = Number.parseInt(req.query.page) || 1; // Page par défaut : 1
		const limit = 2; // Nombre de livres par page
		const offset = (page - 1) * limit; // Calcul de l'offset

		try {
			const { count, rows: books } = await Book.findAndCountAll({
				limit,
				offset,
				distinct: true,
				include: [{ association: "authors" }, { association: "gender" }],
			});

			const totalPages = Math.ceil(count / limit);

			// Rendu de la vue avec les livres et informations de pagination
			res.render("library", {
				books,
				currentPage: page,
				totalPages,
			});
		} catch (error) {
			console.error("Erreur lors de la récupération des livres :", error);
			res.status(500).send("Erreur lors de la récupération des livres.");
		}
	},
};
