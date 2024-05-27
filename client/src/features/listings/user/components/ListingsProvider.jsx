import useListings from '../hooks/useListings';
import ListingCardsGrid from './ListingCardsGrid';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';

import NotFoundListings from './NotFoundListings';

export default function ListingsProvider() {
  const { listings, isLoading, fetchNextPage, isFetching } = useListings();
  const { ref } = useIntersectionObserver(fetchNextPage);

  return (
    <div className="mx-auto pt-28 pb-5 px-[5%]">
      {listings?.length === 0 ? (
        <NotFoundListings />
      ) : (
        <>
          <ListingCardsGrid
            listings={listings}
            isLoading={isLoading || isFetching}
          />
          <div ref={ref}></div>
        </>
      )}
    </div>
  );
}
