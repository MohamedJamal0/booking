import authService from '../../services/auth/index.js';

export const getCurrentUser = async (req, res) => {
  const user = await authService.getCurrentUser(+req.user.id);
  res.status(200).json(user);
};
