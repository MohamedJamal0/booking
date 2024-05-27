import Joi from 'joi';

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const userSignUpSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const hostSignUpSchema = Joi.object({
  mobileNumber: Joi.string().required(),
  country: Joi.string().required(),
  address: Joi.string().required(),
  overview: Joi.string().required(),
});

export default { userLoginSchema, userSignUpSchema, hostSignUpSchema };
