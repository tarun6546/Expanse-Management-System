const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');
//config dot env file
dotenv.config();

//database connection
connectDb();

//rest of the objects
const app = express();

///middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Expanse Management System API</h1>');
});

//port
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgBlue.white);
});