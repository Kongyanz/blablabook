import sequelize from "../models/sequelize.js";

export const searchBooks = {
    async search(req, res) {
        try {
            // Récupérer la recherche
            const { livre } = req.query;


            // Validation stricte de la requête
            if (!livre || typeof livre !== 'string' || livre.trim() === '') {
                console.error("Termes de recherche invalides :", livre);
                return res.status(400).render("search", { books: [], message: "Veuillez fournir un terme de recherche valide." });
            }

            // Requête SQL sécurisée avec Sequelize
            const books = await sequelize.query(
                "SELECT * FROM books WHERE LOWER(title) LIKE LOWER(:title)", //named parameter for the search. The positionnl parameter is not u
                {
                    replacements: { title: `%${livre.trim()}%` }, // partial reseach, cut the spaces the  % is used to find the words
                    type: sequelize.QueryTypes.SELECT, // specifie the request type that sequelize has to use
                    raw: true, // retrurn simple data on the terminal
                }
            );

            // Vérifier si des résultats ont été trouvés
            if (books.length === 0) {
                return res.status(404).render("search", { books: [], message: "Aucun livre trouvé avec ce titre." });
            }

            // Rendre la vue avec les résultats
            res.render("search", { books, message: null });
        } catch (error) {
            console.error("Erreur lors de la recherche de livres :", error);
            res.status(500).render("search", { books: [], message: "Une erreur est survenue lors de la recherche. Veuillez réessayer plus tard." });
        }
    }
};