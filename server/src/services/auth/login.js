import { BadRequestError } from '../../errors/index.js';
import bcrypt from 'bcrypt';
import prisma from '../../lib/prisma.js';

export const login = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) throw new BadRequestError('Invalid email or password');

  const passMatch = await bcrypt.compare(password, user.password);

  if (!passMatch) throw new BadRequestError('Invalid email or password');

  const host = await prisma.host.findUnique({ where: { userId: user.id } });

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    isHost: host ? true : false,
    hostId: host ? host.id : '',
  };
};
