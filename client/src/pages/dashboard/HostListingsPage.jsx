import HostingPageLoading from '../../components/HostingPageLoading';
import useHostListings from '../../features/listings/dashboard/hooks/useHostListings';
import CreateListing from '../../features/listings/dashboard/components/CreateListing';

import HostListingsList from '../../features/listings/dashboard/components/HostListingsList';

export default function HostListingsPage() {
  const { hostListings, isLoading } = useHostListings();

  if (isLoading) return <HostingPageLoading />;

  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <div className="flex justify-between items-center mb-14">
        <h1 className="text-3xl font-medium">Your Places</h1>
        <CreateListing />
      </div>
      {hostListings.length === 0 && (
        <div className="flex items-center justify-center h-56 p-6 rounded-md bg-gray-100 ">
          <h1 className="font-medium text-gray-500">
            You don not have any place yet
          </h1>
        </div>
      )}
      <HostListingsList hostListings={hostListings} />
    </div>
  );
}
