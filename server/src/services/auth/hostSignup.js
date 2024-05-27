import { BadRequestError } from '../../errors/index.js';
import prisma from '../../lib/prisma.js';

export const hostSignup = async ({ user, hostData }) => {
  const { id } = user;

  const isHost = await prisma.host.findUnique({ where: { userId: id } });

  if (isHost) throw new BadRequestError('Host already exists');

  const host = await prisma.host.create({ data: { userId: id, ...hostData } });

  res.status(201).json({
    id,
    isHost: true,
    hostId: host.id,
  });
};
