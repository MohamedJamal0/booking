import { generateToken, attachTokenToCookies } from '../../lib/jwt.js';
import authService from '../../services/auth/index.js';

export const login = async (req, res) => {
  const user = await authService.login(req.body);

  const tokenPayload = {
    id: user.id,
    isHost: user.isHost,
    hostId: user.hostId,
  };

  const token = generateToken(tokenPayload);

  attachTokenToCookies(res, token);

  res.status(200).json(user);
};
