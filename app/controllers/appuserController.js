import { AppUser } from "../models/association.js";
import { Book } from "../models/association.js";
import { AppUserBook } from "../models/association.js";

export const appuserController = {
	async getUserById(req, res) {
		const userId = req.params.id;
		const user = await AppUser.findByPk(userId);
		if (!user) {
			return res.redirect("/mon-compte");
		}
		res.render("user-informations", { user });
	},

	async getAccountPage(req, res) {
		try {
			const userId = req.session.userId;
			const user = await AppUser.findByPk(userId);

			if (!user) {
				return res.redirect("/");
			}

			res.render("user-informations", { user });
		} catch (error) {
			console.error("Erreur lors de l'accès à la page compte :", error.message);
			res.status(500).render("errors/500", { error:
				 "Une erreur est survenue lors du chargement de votre compte."});
		}
	},

	async remove(req, res) {
		try {
			const idToDelete = req.params.id;
			const user = await AppUser.findByPk(idToDelete);

			if (!user) {
				return res.redirect("/error");
			}

			await user.destroy();

			res.redirect("/");
		} catch (error) {
			console.error("Error deleting user:", error);
			res.redirect("/error");
		}
	},

	async getUserLibrary(req, res) {
		try {
			const userId = req.session.userId;
			if (!userId) {
				return res.redirect("/");
			}

			const userBooks = await AppUserBook.findAll({
				where: { app_user_id: userId },
				include: [
					{
						model: Book,
						as: "book",
					},
				],
			});

			const booksRead = userBooks
				.filter((ub) => ub.status === "read")
				.map((ub) => ub.book);
			const booksToRead = userBooks
				.filter((ub) => ub.status === "to-read")
				.map((ub) => ub.book);

			res.render("user-library", {
				booksRead,
				booksToRead,
			});
		} catch (error) {
			console.error(
				"Erreur lors de la récupération de la bibliothèque utilisateur :",
				error,
			);
			res.redirect("/error");
		}
	},

	async markBookAsRead(req, res) {
		try {
			const userId = req.session.userId; // Retrieve the user ID from the session
			const bookId = req.params.id; // Retrieve the book ID from the request parameters
			if (!userId) {
				return res.redirect("/auth/login"); //  Redirect if the user is not logged in
			}

			// Update or create an entry in AppUserBook to mark as "read"
			await AppUserBook.upsert({
				app_user_id: userId,
				book_id: bookId,
				status: "read",
			});

			res.redirect(`/livre/${bookId}`); // Redirect to the book details page
		} catch (error) {
			console.error("Erreur lors du marquage du livre comme lu :", error); // Log the error
			res.redirect("/error"); // Redirect to a generic error page
		}
	},

	async addBookToRead(req, res) {
		try {
			const userId = req.session.userId; // Retrieve the user ID from the session
			const bookId = req.params.id; // Retrieve the book ID from the request parameters

			if (!userId) {
				return res.redirect("/auth/login"); // Redirect if the user is not logged in
			}

			// Update or create an entry in AppUserBook to mark as "to-read"
			await AppUserBook.upsert({
				app_user_id: userId,
				book_id: bookId,
				status: "to-read",
			});

			res.redirect(`/livre/${bookId}`); // Redirect to the book details page
		} catch (error) {
			console.error(
				"Erreur lors de l'ajout du livre à la liste à lire :",
				error,
			); // Log the error
			res.redirect("/error"); // Redirect to a generic error page
		}
	},
};
