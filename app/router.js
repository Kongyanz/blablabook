import { Router } from "express";
import { mainController} from "./controllers/mainController.js" // import mainController from "./controller/mainController.js"
 
import { appuserController } from "./controllers/appuserController.js"; // import appuserController from "./controller/appuserController.js"
import { bookController } from "./controllers/bookController.js";
import  authController  from "./controllers/authController.js"; 

const router = Router();

//homepage+books routes
router.get("/", mainController.renderHomePage);
router.get("/book/:id", bookController.getBookDetails);


//authentification routes
router.post("/creer-un-compte", authController.handleSignUp);
router.get("/creer-un-compte", authController.displaySignUpForm);
// router.get("/inscription-reussie", (req, res) => {
    // res.render("auth/inscription-reussie");
// });




export default router;


//app user :
router.get("/users/:id", appuserController.getUserById); // Add the route for fetching user info
router.post("/user/:id/delete", appuserController.remove); // Add the route for deleting a user

