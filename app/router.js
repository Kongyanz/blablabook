import { Router } from "express";
import { mainController} from "./controllers/mainController.js" // import mainController from "./controller/mainController.js"
 

export const router = Router();
// Define the routes
router.get("/", mainController.renderHomePage);

