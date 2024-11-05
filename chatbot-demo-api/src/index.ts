import bodyParser from 'body-parser';
import express from 'express';
import flash from 'express-flash';
import session from 'express-session';
import { config } from 'dotenv';

import chatbotRoutes from './routes/chatbotRoutes';

config();

const app = express();

app.set('view engine', 'ejs');

// Express packages
app.use(session({
  secret: '4f9h8G2k1LzR',
  resave: false,
  saveUninitialized: false,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(flash());

// Routes
app.use('/chatbot', chatbotRoutes);

// Handle unknown routes response
app.use('*', (req, res, next): void => {
  res.status(404).json({ message: 'Not Found!' });
});

app.listen(process.env.PORT);