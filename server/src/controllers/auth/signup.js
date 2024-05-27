import { generateToken, attachTokenToCookies } from '../../lib/jwt.js';
import authService from '../../services/auth/index.js';

export const signup = async (req, res) => {
  const user = await authService.signup(req.body);
  const tokenPayload = {
    id: user.id,
    isHost: user.isHost,
    hostId: user.hostId,
  };

  const token = generateToken(tokenPayload);
  attachTokenToCookies(res, token);

  res.status(201).json(user);
};
