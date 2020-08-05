const data = require('../data/data');
const errHandler = require("../../../../config/errorHandler");

exports.list = async (req, res, next) => {
    try {
        return res.status(200).send({
            status: 'success',
            data: data,
            message: ""
        });

    } catch (e) {
        return res.status(500).send({
            status: 'error',
            message: errHandler.getErrorMessage(e)
        })
    }
}
