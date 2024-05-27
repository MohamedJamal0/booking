import { FaStar } from 'react-icons/fa';
import Carousel from '../../../../components/Carousel';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

export default function ListingCard({ listing, index }) {
  const [urlSearchParams] = useSearchParams();

  const navigate = useNavigate();



  const handleNavigate = () => {
    navigate(`/listings/${listing.id}?${createSearchParams(urlSearchParams)}`);
  };

  const animationDelay = (index % 20) * 0.05 + 's';

  return (
    <li
      onClick={handleNavigate}
      style={{ animationDelay }}
      className=" animate-fade-in opacity-0 group relative cursor-pointer"
    >
      <div className="overflow-hidden rounded-md">
        <Carousel images={listing.images.map((i) => i.imageUrl)} />
        <div className="flex justify-between mt-2">
          <h2 className="font-medium">{`${listing.city}, ${listing.country}`}</h2>
          {listing.averageRating && (
            <div className="flex items-center gap-1">
              <FaStar />
              <span>{(+listing.averageRating).toFixed(2)}</span>
            </div>
          )}
        </div>
        <div className="mt-1">
          <span className="font-medium">${+listing.pricePerNight}</span>
          <span className="text-sm"> night</span>
        </div>
      </div>
    </li>
  );
}
