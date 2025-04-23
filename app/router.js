import { Router } from "express";
import { mainController} from "./controllers/mainController.js" // import mainController from "./controller/mainController.js"
import { bookController } from "./controllers/bookController.js";
import  authController  from "./controllers/authController.js"; 

const router = Router();
// Define the routes
router.get("/", mainController.renderHomePage);

 //inscription
 //Route POST 
router.post("/creer-un-compte", authController.handleSignUp);
 //Route GET 
router.get("/creer-un-compte", authController.displaySignUpForm);
router.get("/inscription-reussie", (req, res) => {
    res.render("auth/inscription-reussie");
});
 
 router.get("/book/:id", bookController.getBookDetails);



export default router;

