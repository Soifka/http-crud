const { ValidationError } = require('yup');
const DataBaseError = require('./errors/DataBaseError');

module.exports.basicErrorHandler = (err, req, res, next) => {
    if(err instanceof DataBaseError) {
        return res.status(400).send('Something wrong with database');
    }

    if(err instanceof ValidationError) {
        return res.status(400).send('Invalid data');
    }
    next();
}