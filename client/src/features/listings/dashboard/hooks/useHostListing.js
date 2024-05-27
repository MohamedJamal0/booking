import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getHostListing } from '../services';

export default function useHostListing() {
  const { listingId } = useParams();

  const { data: listing, isLoading } = useQuery({
    queryKey: ['listing', listingId],
    queryFn: () => getHostListing(listingId),
  });

  if (listing) {
    const isCompleted =
      listing.amenities.length > 0 &&
      listing.summary &&
      listing.type?.id &&
      listing.category?.id &&
      listing.images.length >= 5 &&
      listing.pricePerNight > 0;

    listing.isCompleted = isCompleted;
  }

  return { listing, isLoading };
}
