const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
 
// connect to mongodb
 
mongoose.connect('mongodb://localhost/project-db', () => {
    console.log("db connected")
});
mongoose.Promise = global.Promise;

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
