// utils/validate.js
const { validationResult } = require('express-validator');

const runValidation = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const error = errors.array()[0];
                return res.status(400).json({
                    field: error.param,
                    message: error.msg,
                });
            }
        }
        next();
    };
};

module.exports = runValidation;
