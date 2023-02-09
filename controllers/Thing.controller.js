const { Thing } = require('../models/index');

module.exports.createThing = async(req, res, next) => {
    const { body } = req;

    try {
        const createdThing = await Thing.create(body);
        console.log(createdThing)
        if(createdThing) {
            return res.status(201).send(createdThing);
        } else {
            throw new ReferenceError('Reference error');
            //return res.status(400).send();
        }
    } catch (error) {
        next(error);
    }
}

module.exports.getAllThings = async (req, res, next) => {
    try {
        const things = await Thing.findAll();
        return res.status(200).send(things);
    } catch (error) {
        next(error);
    }
}

module.exports.getOneThing = async (req, res, next) => {
    const {params: {id}} = req;
    try {
        const thing = await Thing.findByPk(id);
        return res.status(200).send(thing);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteOneThing = async (req, res, next) => {
    const {params: {id}} = req;
    try {
        const deletedThing = await Thing.deleteByPk(id);
        return res.status(200).send(deletedThing); 
    } catch (error) {
        next(error);
    }
}

module.exports.updateOneThing = async (req, res, next) => {
    const {params: {id}, body} = req;
    try {
        const updatedThing = await Thing.updateByPk(
            {
            id: Number(id),
            updateValues: body
            }
        );
        return res.status(200).send(updatedThing);
    } catch (error) {
        next(error);
    }
}