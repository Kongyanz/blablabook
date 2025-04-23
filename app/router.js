import { Router } from "express";
import { mainController } from "./controllers/mainController.js" // import mainController from "./controller/mainController.js"
import { bookController } from "./controllers/bookController.js";
import  authController  from "./controllers/authController.js"; 

const router = Router();

//homepage+books routes
router.get("/", mainController.renderHomePage);
router.get("/book/:id", bookController.getBookDetails);

//authentification routes
router.post("/creer-un-compte", authController.handleSignUp);
router.get("/creer-un-compte", authController.displaySignUpForm);

router.get("/connexion", authController.displayLoginForm);
router.post("/connexion", authController.handleLogin);

 router.get("/inscription-reussie", (req, res) => {
 res.render("auth/inscription-reussie"); });

export default router;

