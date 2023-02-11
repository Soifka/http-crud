const express = require('express');
const ThingController = require('./controllers/Thing.controller');
const { basicErrorHandler } = require('./errorHandler');
const { validateThing } = require('./utils/validationThings');

// app - объект с роутами
const app = express();
const bodyParser = express.json();
app.use(bodyParser); // подключает bodyParser на все роуты

// роуты -->
app.post('/thing', validateThing, ThingController.createThing); //// create 1 thing
app.get('/thing/:id', ThingController.getOneThing); //// get 1 Thing
app.get('/things', ThingController.getAllThings); //// get all Things
app.delete('/thing/:id', ThingController.deleteOneThing); //// delete 1 Thing
app.put('/thing/:id', validateThing, ThingController.updateOneThing); //// update 1 Thing

/*
app.use((err, req, res, next) => {
    console.log('Error handler says: ', err.message);
    return res.status(400).send('Oooops, your request is invalid');
})
*/

app.use(basicErrorHandler);

module.exports = app;