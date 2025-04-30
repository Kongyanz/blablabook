import sequelize from "../models/sequelize.js";

export const searchBooks = {
	async search(req, res) {
		try {
			// fetch the search term from the query string
			const { livre } = req.query;
			// request validation
			if (!livre || typeof livre !== "string" || livre.trim() === "") {
				// console.error("Termes de recherche invalides :", livre);
				return res
					.status(400)
					.render("search", {
						books: [],
						message: "Veuillez fournir un terme de recherche valide.",
					});
			}
			// Sanitize the search term
			const books = await sequelize.query(
				"SELECT * FROM books WHERE LOWER(title) LIKE LOWER(:title)", //dynamic query with named parameters
				{
					replacements: { title: `%${livre.trim()}%` }, // replace the named parameter with the value
					// the '%' character is used to match any sequence of characters
					// the 'LOWER' function is used to make the search case-insensitive
					// the 'LIKE' operator is used to search for a specified pattern in a column
					type: sequelize.QueryTypes.SELECT, // specifie the request type that sequelize has to use
					raw: true, // retrurn simple data on the terminal instead of sequelize objects
				},
			);
			// verify if the search returned any results
			if (books.length === 0) {
				return res
					.status(404)
					.render("search", {
						books: [],
						message: "Aucun livre trouvé avec ce titre.",
					});
			}
			// Rendre la vue avec les résultats
			res.render("search", { books, message: null });
		} catch (error) {
			console.error("Erreur lors de la recherche de livres :", error);
			res.status(500).render("search", {books: [],message:"Une erreur est survenue lors de la recherche. Veuillez réessayer plus tard.",});
		}
	},
};
