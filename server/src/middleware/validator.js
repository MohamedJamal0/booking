import { BadRequestError } from '../errors/index.js';

export const validateQuery = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      throw new BadRequestError(errors.join(', '));
    }
    req.query = value;
    next();
  };
};

export const validateBody = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors });
    }
    req.body = value;
    next();
  };
};
