const fs = require('fs');
const path = require('path');

const currentFileName = path.basename(__filename);


const db = {};

const fileName = fs.readdirSync(__dirname);
const filtered = fileName.filter(fName => /.js$/.test(fName) && fName !== currentFileName);

filtered.forEach(fName => {
    const absPathToFile = path.resolve(__dirname, fName);
    const Model = require(absPathToFile);
    Model.client = client;
    db[Model.name] = Model;
});