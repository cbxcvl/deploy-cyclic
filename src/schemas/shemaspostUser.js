const Joi = require("joi");

const schemasPostUser = Joi.object({
  name: Joi.string().min(4).max(255).required().messages({
    "any.required": "O campo nome é obrigatório",

    "string.min": "O campo nome precisa ter no mínimo 4 caracteres",

    "string.max": "O campo nome pode ter no maximo 255 caracteres",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .max(255)
    .required()
    .messages({
      "string.email": "O campo email precisa ter um formato válido",

      "string.empty": "O campo de e-mail não pode estar vazio",

      "string.max": "O campo email pode ter no maximo 255 caracteres",

      "any.required": "O campo de e-mail é obrigatório",
    }),
  password: Joi.string().min(8).alphanum().required().messages({
    "string.min": "A senha precisa ter no mínimo 8 caracteres",

    "string.empty": "O campo de senha não pode estar vazio",

    "any.required": "O campo de senha é obrigatório",
  }),
});

module.exports = schemasPostUser;
