// validationMiddleware.js

import Joi from 'joi'

export const registerValidationSchema = Joi.object({
    userName: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required()
        .messages({
            'string.alphanum': 'Username must only contain alphanumeric characters',
            'string.min': 'Username must be at least {#limit} characters long',
            'string.max': 'Username must not exceed {#limit} characters',
            'string.empty': 'Username is required'
        }),

    email: Joi.string()
        // .email({ tlds: ['com', 'eg']})
        .email({ minDomainSegments: 2, tlds: [{ allow: false }] })
        .required()
        .messages({
            'string.email': 'Invalid email format',
            'string.empty': 'Email is required'
        }),

    password: Joi.string()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/)
        .required()
        .messages({
            'string.min': 'Password must be at least {#limit} characters long',
            'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
            'string.empty': 'Password is required'
        }),

    confirmedPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Confirm email must match email',
            'string.empty': 'Confirm email is required'
        }).options({ allowUnknown: false })
});




export const loginValidationSchema = Joi.object({
    email: Joi.string()
        // .email({ tlds: ['com', 'eg']})
        .email({ minDomainSegments: 2, tlds: [{ allow: false }] })
        .required()
        .messages({
            'string.email': 'Invalid email format',
            'string.empty': 'Email is required'
        }),

    password: Joi.string()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).*$/)
        .required()
        .messages({
            'string.min': 'Password must be at least {#limit} characters long',
            'string.pattern.base': 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character',
            'string.empty': 'Password is required'
        }).options({ allowUnknown: false })
});





// module.exports = {
//     validateRegister
// };

// export  { registerValidationSchema, loginValidationSchema }