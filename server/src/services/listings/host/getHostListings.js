import prisma from '../../../lib/prisma.js';

export const getHostListings = async (user) => {
  const listings = await prisma.listing.findMany({
    where: {
      hostId: user.hostId,
    },
    select: {
      id: true,
      title: true,
      city: true,
      status: { select: { name: true } },
      images: { select: { imageUrl: true }, take: 1 },
    },
  });
  return listings;
};
