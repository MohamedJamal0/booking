import prisma from '../../lib/prisma.js';
import bcrypt from 'bcrypt';
import { BadRequestError } from '../../errors/index.js';

export const signup = async ({ email, password, firstName, lastName }) => {
  const isEmailExist = await prisma.user.findUnique({ where: { email } });

  if (isEmailExist) throw new BadRequestError('Email already exists');

  const hashedPassword = await bcrypt.hash(password, 10); 

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      firstName,
      lastName,
    },
  });

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    isHost: false,
    hostId: '',
  };
};
