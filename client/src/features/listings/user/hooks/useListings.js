import { getListings } from '../services';
import { useInfiniteQuery } from '@tanstack/react-query';
import useSearchParamsFromUrl from '../../../../hooks/useListingSearchParams';
import { getDifferenceInDays } from '../../../../utils/helper';

export default function useListings() {
  const {
    city,
    startDate,
    endDate,
    maxPrice,
    minPrice,
    type,
    category,
    amenities,
    page,
    totalGuests,
  } = useSearchParamsFromUrl();

  const numberOfNights = getDifferenceInDays(startDate, endDate) || 0;

  const filterParams = {
    city,
    startDate,
    endDate,
    maxPrice,
    minPrice,
    typeId: type,
    categoryId: category,
    amenities,
    page,
  };

  if (numberOfNights) filterParams.minNumberOfNights = numberOfNights;
  if (totalGuests) filterParams.maxNumberOfGuests = totalGuests;

  const { data, fetchNextPage, isLoading, isFetching } = useInfiniteQuery({
    queryFn: ({ pageParam }) =>
      getListings({ ...filterParams, page: pageParam }),
    queryKey: ['Listings', filterParams],
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < 20) return undefined;
      return pages.length + 1;
    },
  });

  const listings = data?.pages.flatMap((page) => page);

  return { listings, fetchNextPage, isLoading, isFetching };
}
