const Joi = require('@hapi/joi');
const joiFactory = (schema, property) => {
    return (req, res, next) => {
        console.log(req.body)
        const { error } = Joi.validate(req.body, schema);
        const valid = error == null;
        if (valid) { next(); }
        else {
            const { details } = error;
            const message = details.map(i => i.message).join(',')
            console.log("error", message);
            res.status(422).json({ error: message })
        }
    }
}
module.exports = joiFactory;