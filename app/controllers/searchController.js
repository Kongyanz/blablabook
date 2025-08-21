import sequelize from "../models/sequelize.js";

export const searchBooks = {
	async search(req, res) {
		try {
			
			const { livre } = req.query;

			if (!livre || typeof livre !== "string" || livre.trim() === "") {
				return res
					.status(400)
					.render("search", {
						books: [],
						message: "Veuillez fournir un terme de recherche valide.",
					});
			}
			const books = await sequelize.query(
				"SELECT * FROM books WHERE LOWER(title) LIKE LOWER(:title)",
				{
					replacements: { title: `%${livre.trim().slice(0,20)}%` },
					type: sequelize.QueryTypes.SELECT,
					raw: true, 
				},
			);





			
			console.log(books)
			if (books.length === 0) {
				return res
					.status(404)
					.render("search", {
						books: [],
						message: "Aucun livre trouvé avec ce titre.",
					});
			}
			res.render("search", { books, message: null });
		} catch (error) {
			console.error("Erreur lors de la recherche de livres :", error);
			res.status(500).render("search", {books: [],message:"Une erreur est survenue lors de la recherche. Veuillez réessayer plus tard.",});
		}
	},
};
