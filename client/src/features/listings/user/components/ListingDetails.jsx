import { FaStar } from 'react-icons/fa';
import { amenitiesIcons } from './ListingAmenitiesIcons';

export default function ListingDetails({
  city,
  numberOfBeds,
  numberOfBathrooms,
  numberOfRooms,
  summary,
  averageRating,
  numberOfReviews,
  amenities,
}) {
  return (
    <>
      <div className="py-8 border-b">
        <h3 className="text-xl">{city}</h3>
        <span className="text-gray-500">{` ${numberOfBeds} beds · ${numberOfBathrooms} baths · ${numberOfRooms} rooms`}</span>
        <p className="flex items-center gap-2 mt-3  ">
          <FaStar className="mt-1" />
          {numberOfReviews > 0 && (
            <span className="font-medium underline cursor-pointer">
              {`${(+averageRating).toFixed(2)} · ${numberOfReviews} reviews`}
            </span>
          )}
          {numberOfReviews === 0 && <span>No reviews yet</span>}
        </p>
      </div>
      <p className="py-6 border-b text-gray-700">{summary}</p>
      <div className=" py-12 border-b">
        <h2 className="mb-6 text-xl font-medium">What this place offers</h2>
        <ul className="grid grid-cols-2 gap-3">
          {amenities.map(({ amenity: { name } }) => (
            <li className="flex items-center gap-5" key={name}>
              {amenitiesIcons[name]}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
