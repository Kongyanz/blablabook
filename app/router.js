import { Router } from "express";
import { mainController} from "./controllers/mainController.js" // import mainController from "./controller/mainController.js"
 
import { appuserController } from "./controllers/appuserController.js"; // import appuserController from "./controller/appuserController.js"

export const router = Router();
// Define the routes
router.get("/", mainController.renderHomePage);


//app user :
router.get("/users/:id", appuserController.getUserById); // Add the route for fetching user info
router.post("/user/:id/delete", appuserController.remove); // Add the route for deleting a user

