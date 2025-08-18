import { Router } from "express";
import { mainController } from "./controllers/mainController.js"; 
import { appuserController } from "./controllers/appuserController.js";
import { bookController } from "./controllers/bookController.js";
import { authController } from "./controllers/authController.js";
import { searchBooks } from "./controllers/searchController.js";

const router = Router();

// books routes
router.get("/", mainController.renderHomePage);
router.get("/livre/:id", bookController.getBookDetails);
router.get("/search", searchBooks.search);
router.get("/livres", bookController.getPaginatedBooks);

//authentification routes
router.post("/creer-un-compte", authController.handleSignUp);
router.get("/creer-un-compte", authController.displaySignUpForm);
router.get("/connexion", authController.displayLoginForm);
router.post("/connexion", authController.handleLogin);
router.get("/deconnexion", authController.handleLogout);
router.get("/inscription-reussie", (req, res) => {
  res.render("auth/inscription-reussie");
});

//app user
router.get("/mon-compte", appuserController.getAccountPage);
router.post("/users/:id/delete", appuserController.remove);
router.get("/ma-bibliotheque", appuserController.getUserLibrary);
router.post("/livres/:id/mark-read", appuserController.markBookAsRead);
router.post("/livres/:id/add-to-read", appuserController.addBookToRead);

export default router;
