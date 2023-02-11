class DataBaseError extends Error {
    constructor(message) {
        super(message);
        this.message = 'Database failed';
    }

}

module.exports = DataBaseError;