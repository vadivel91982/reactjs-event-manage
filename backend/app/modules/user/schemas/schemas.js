const Joi = require('joi')
const schemas = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    mobile: Joi.number().required()
})
module.exports = schemas;