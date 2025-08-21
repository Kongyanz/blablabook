import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import { setupSession, initUserLocals, } from './app/middlewares/setupSession.middleware.js';
import router from './app/router.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(helmet());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(setupSession);
app.use(initUserLocals);
app.use(router);
app.get('/ping', (req, res) => {
  res.send('pong');
});


app.listen(PORT, '0.0.0.0',  () => {
  console.log(`📘 Blablabook started at http://localhost:${PORT}`);
});
export default app;