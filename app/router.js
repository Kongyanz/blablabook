import { Router } from "express";
import { mainController} from "./controllers/mainController.js" // import mainController from "./controller/mainController.js"
 import { appuserController } from "./controllers/appuserController.js"; // import appuserController from "./controller/appuserController.js"
import { bookController } from "./controllers/bookController.js";
import  authController  from "./controllers/authController.js"; 
import { searchBooks } from "./controllers/searchController.js";

const router = Router();

//homepage+books routes
router.get("/", mainController.renderHomePage);
router.get("/livre/:id", bookController.getBookDetails);
router.get("/search", searchBooks.search);

// TODO : route pour TOUS les livres "/livres"
router.get("/livres", bookController.getAllBooks);

//authentification routes
router.post("/creer-un-compte", authController.handleSignUp);
router.get("/creer-un-compte", authController.displaySignUpForm);

router.get("/connexion", authController.displayLoginForm);
router.post("/connexion", authController.handleLogin);

router.get("/inscription-reussie", (req, res) => {
 res.render("auth/inscription-reussie"); 
});

router.get("/deconnexion", authController.handleLogout);

//app user
router.get("/mon-compte", appuserController.getAccountPage); // Add the route for fetching user info
router.post("/users/:id/delete", appuserController.remove); // Add the route for deleting a user

export default router;