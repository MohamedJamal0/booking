import { useNavigate } from 'react-router-dom';
import ListingStatus from './ListingStatus';
import DeleteListing from './DeleteListing';
import Cldimage from '../../../../components/Cldimage';
export default function HostListingCard({ listing }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/hosting/listings/editor/${listing.id}`);
  };

  return (
    <div className="relative cursor-pointer">
      {listing.images[0]?.imageUrl ? (
        <div className="aspect-[3/2.5]">
          <Cldimage
            width={400}
            height={400}
            className="w-full h-full rounded-md"
            url={listing.images[0].imageUrl}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="w-full rounded-md aspect-[3/2.5] bg-slate-200"></div>
      )}
      <div className="font-medium mt-2">{listing.title}</div>
      <div className="text-gray-700">{listing.city}</div>
      <DeleteListing listingId={listing.id} />
      <div
        onClick={handleOnClick}
        className="absolute top-0 right-0 w-full h-full z-10"
      ></div>
      <div className="absolute top-3 left-2 flex items-center gap-2 px-4 py-1 font-medium text-sm  rounded-full bg-white">
        <ListingStatus status={listing.status.name} />
        <span>{listing.status.name}</span>
      </div>
    </div>
  );
}
