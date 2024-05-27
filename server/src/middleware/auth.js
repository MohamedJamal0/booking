import { UnauthenticatedError } from '../errors/index.js';
import { verifyToken } from '../lib/jwt.js';

const cookieJwtAuth = async (req, res, next) => {
  const token = req.cookies.token;

  try {
    const user = verifyToken(token);
    req.user = user;

    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

const isHost = async (req, res, next) => {
  if (!req.user.isHost) {
    throw new UnauthenticatedError('Unauthorized access');
  }
  next();
};

export { cookieJwtAuth, isHost };
