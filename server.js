import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { engine } from 'express-handlebars';

import auth_routes from './routes/auth_routes.js';
import view_routes from './routes/view_routes.js';
import express from 'express';

dotenv.config();
const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/', view_routes);

app.use('/api/auth', auth_routes);

export default app;
