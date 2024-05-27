export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0),
    httpOnly: true,
    secure: true,
    sameSite: 'None',
  });

  // Clear cache-control headers
  res.set('Cache-Control', 'no-store, max-age=0');

  res.status(200).json({ message: 'Logged out successfully' });
};