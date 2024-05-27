import prisma from '../../lib/prisma.js';

export const getCurrentUser = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  const host = await prisma.host.findUnique({ where: { userId: userId} });

  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    isHost: host ? true : false,
    hostId: host ? host.id : '',
  };
};
