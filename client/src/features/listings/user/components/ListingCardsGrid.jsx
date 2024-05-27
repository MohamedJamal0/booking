import ListingCard from './ListingCard';
import ListingsLoading from './ListingsLoading';

export default function ListingCardsGrid({ listings, isLoading }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
      {listings?.map((listing, index) => (
        <ListingCard key={listing.id} listing={listing} index={index} />
      ))}
      {isLoading && <ListingsLoading />}
    </ul>
  );
}
