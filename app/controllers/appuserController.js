import { AppUser } from "../models/association.js";
import { Book } from "../models/association.js";
import {AppUserBook } from "../models/association.js";


export const appuserController = {
  async getUserById(req, res) {
    const userId = req.params.id; // Extract the user ID from the route parameter
    const user = await AppUser.findByPk(userId); // Fetch the user from the database using the primary key

    if (!user) {
      return res.redirect("/user-informations"); // Handle case where user doesn't exist
    }
    res.render("user-informations", { user }); // Pass the user data to the EJS view
  },
  
  async getAccountPage(req, res) {
    try {
      const userId = req.session.userId; // Get the user ID from the session
      const user = await AppUser.findByPk(userId); // Fetch the user from the database

      if (!user) {
        return res.redirect("/"); // Redirect to an error page if the user is not found
      }

      res.render("user-informations", { user }); // Render the account page with user data
    } catch (error) {
      console.error("Error fetching account page:", error);
      res.redirect("/"); // Redirect to an error page in case of an unexpected error
    }
  },
  async remove(req, res) {
    try {
      const idToDelete = req.params.id; // Extract the user ID from the route parameter
      const user = await AppUser.findByPk(idToDelete); // Fetch the user from the database

      if (!user) {
        // Redirect to an error page if the user is not found
        return res.redirect("/error");
      }

      // Delete the user
      await user.destroy();

      // Redirect to a success page or another route
      res.redirect("/");
    } catch (error) {
      console.error("Error deleting user:", error);
      // Redirect to a generic error page in case of an unexpected error
      res.redirect("/error");
    }
  },
  //page de livres de l'utilisateur (avec lu à lire)
  async getUserLibrary(req, res) {
    try {
      const userId = req.session.userId; // Récupérer l'ID utilisateur depuis la session
      if (!userId) {
        return res.redirect("auth/login"); // Rediriger si l'utilisateur n'est pas connecté
      }
  
      // Récupérer les livres associés à l'utilisateur
      const userBooks = await AppUserBook.findAll({
        where: { app_user_id: userId },
        include: [
          {
            model: Book,
            as: "book",
          },
        ],
      });
  
      // Séparer les livres en "lus" et "à lire"
      const booksRead = userBooks.filter((ub) => ub.status === "read").map((ub) => ub.book);
      const booksToRead = userBooks.filter((ub) => ub.status === "to-read").map((ub) => ub.book);
  
      // Rendre la vue avec les données des livres
      res.render("user-library", {
        booksRead,
        booksToRead,
      });
    } catch (error) {
      console.error("Erreur lors de la récupération de la bibliothèque utilisateur :", error);
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
      console.error("Erreur lors de l'ajout du livre à la liste à lire :", error); // Log the error
      res.redirect("/error"); // Redirect to a generic error page
    }
  }
};
 


