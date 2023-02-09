module.exports.basicErrorHandler = (err, req, res, next) => {
    if(err instanceof TypeError) {
        return res.status(400).send('Thing does not exist');
    }

    if(err instanceof RangeError) {
        return res.status(401).send('There is more than one thing');
    }
}