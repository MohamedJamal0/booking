import HostListingCard from './HostListingCard';

export default function HostListingsList({ hostListings }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-5">
      {hostListings.map((hostListing) => (
        <HostListingCard key={hostListing.id} listing={hostListing} />
      ))}
    </div>
  );
}