import { generateToken, attachTokenToCookies } from '../../lib/jwt.js';
import authService from '../../services/auth/index.js';

export const hostSignup = async (req, res) => {
  const host = await authService.hostSignup({
    user: req.user,
    hostData: req.body,
  });
  console.log(host);
  const token = generateToken({
    id,
    isHost: true,
    hostId: host.id,
  });

  attachTokenToCookies(res, token);

  res.status(201).json(host);
};
