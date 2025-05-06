import 'dotenv/config';
import express from 'express';
import router from "./app/router.js";
import { setupSession, initUserLocals } from "./app/middlewares/setupSession.middleware.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("public"));
app.use("/favicon.ico", express.static("./public/images/logo.svg"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(setupSession);
app.use(initUserLocals);
app.use(router);

app.listen(PORT, () => {
  console.log(`Blablabook start at localhost http://localhost:${PORT}`);})