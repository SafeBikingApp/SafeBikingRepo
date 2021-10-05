const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const userJoiSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  comments: Joi.array().items(
    Joi.object({
      issue_id: Joi.objectId(),
      message: Joi.string(),
      date: Joi.date(),
    })
  ),
});

module.exports = userJoiSchema;
