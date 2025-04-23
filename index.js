// Load environnment variables from .env
import 'dotenv/config';

// Import NPM modules
import express from 'express';

// Import local modules
import router from "./app/router.js";

import session from "express-session";
import { setupSession, initUserLocals } from "./app/middlewares/setupSession.middleware.js";

// Create Express app
const app = express();

// Configure view engine to use template ejs
app.set("view engine", "ejs");
app.set("views", "./app/views");

// Configure assets routes (static folder)
app.use(express.static("public"));

// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(setupSession);
app.use(initUserLocals);

// Plug routes on app
app.use(router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Blablabook start at localhost http://localhost:${PORT}`);})