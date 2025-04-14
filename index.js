// Load environnment variables from .env
import 'dotenv/config';

// Import NPM modules
import express from 'express';

// Import local modules
import{ router}from './router.js';

// Create Express app
const app = express();

// Configure view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Configure assets routes (static folder)
app.use(express.static("./public"));

// Favicon static route
app.use("/favicon.ico", express.static("./public/images/logo.svg"));

// Plug routes on app
app.use(router);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Blablabook start at localhost http://localhost:${PORT}`);})