import { Outlet } from 'react-router-dom';
import Sidebar from '../../features/listings/dashboard/components/Sidebar';
import HostingPageLoading from '../../components/HostingPageLoading';
import useHostListing from '../../features/listings/dashboard/hooks/useHostListing';

export default function EditListingLayout() {
  const { listing, isLoading } = useHostListing();

  if (isLoading) return <HostingPageLoading />;

  return (
    <div className="md:h-[calc(100vh-80px)] ">
      <div className="flex flex-col h-full md:flex-row">
        <Sidebar listing={listing} />
        <div className="relative flex-[3] h-full md:overflow-y-scroll">
          <div className="max-w-3xl mx-auto py-8 px-[2%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
