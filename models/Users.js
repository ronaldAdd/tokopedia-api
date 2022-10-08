const mongoose = require('mongoose');
const Joi = require('joi');

const UsersSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    access_token: {
        type: String,
        required: true
    },
    app_id: {
        type: String,
    },
    app_key: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});


    function validator (data) {
        const schemaValidation=Joi.object({
            email : Joi.string().required(),
            password : Joi.string().required(),
        })
        const result = schemaValidation.validate(data)
        return result;
    }

    function tokenValidator (data) {
        const schemaValidation=Joi.object({
            data : Joi.array().required()
        })
        const result = schemaValidation.validate(data)
        return result;
    }

    function emailValidator (data) {
        const schemaValidation=Joi.object({
            id : Joi.string().required(),
        })
        const result = schemaValidation.validate(data)
        return result;
    }


module.exports = mongoose.model('users', UsersSchema);
module.exports.validator = validator;
module.exports.tokenValidator = tokenValidator;
module.exports.emailValidator = emailValidator;

