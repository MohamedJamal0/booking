import Box from '../../../../components/ui/Box';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import ListingStatus from './ListingStatus';

export default function Sidebar({ listing }) {
  const renderBoxWithStatus = (linkTo, title, content, incompleteMessage) => (
    <Link to={linkTo}>
      <Box>
        <div className="font-medium mb-1">{title}</div>
        {content ? (
          <div className="text-gray-600">{content}</div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="shrink-0 w-2 h-2 rounded-full bg-orange-500 "></div>
            <div className="text-gray-600">{incompleteMessage}</div>
          </div>
        )}
      </Box>
    </Link>
  );

  const renderAmenities = () => (
    <ul className="flex flex-col gap-1">
      {listing.amenities?.slice(0, 2).map((amenity) => (
        <li key={amenity.amenity.name} className="flex items-center gap-3">
          {amenity.amenity.name}
        </li>
      ))}
      {listing.amenities?.length > 2 && (
        <div className=" text-sm mt-3 text-gray-600">
          +{listing.amenities.length - 2} more
        </div>
      )}
    </ul>
  );

  return (
    <div className="basis-1/3 pt-8 border-r md:py-12">
      <div className="flex items-center gap-4 px-[5%]">
        <Link to={'/hosting/listings'}>
          <FaArrowLeft className="w-6 h-6 mb-2" />
        </Link>
        <h1 className="mb-3 text-3xl font-medium">Place editor</h1>
      </div>
      <ul className="flex flex-row gap-6 h-full py-6 px-[5%] overflow-x-scroll md:overflow-y-scroll md:overflow-x-auto  *:w-[250px] *:shrink-0  md:flex-col md:py-10 md:*:w-full">
        {!listing.isCompleted && (
          <li>
            {renderBoxWithStatus(
              '',
              'Complete Required steps',
              null,
              'Finish these final tasks to publish your listing.'
            )}
          </li>
        )}
        <li>
          {renderBoxWithStatus(
            '',
            'Status',
            <div className="flex items-center gap-2">
              <ListingStatus status={listing.status.name} />
              <span>{listing.status.name}</span>
            </div>,
            ''
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'title',
            'Title',
            listing.title,
            'No title added'
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'summary',
            'Summary',
            listing.summary &&
              (listing.summary.length > 100
                ? listing.summary.slice(0, 100) + ' ...'
                : listing.summary),
            'No summary added'
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'amenities',
            'Amenities',
            listing.amenities.length > 0 ? renderAmenities() : null,
            'No amenities added'
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'type',
            'Type',
            listing.type?.name,
            'No type added'
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'category',
            'Category',
            listing.category?.name,
            'No category added'
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'photos',
            'Photos',
            listing.images.length >= 5 ? (
              <div>
                <img
                  src={listing.images[0].imageUrl}
                  loading="lazy"
                  className="w-10 h-10 rounded-md -rotate-6 -mr-2"
                />
                <div className=" text-sm mt-3 text-gray-600">
                  +{listing.images.length - 1} more
                </div>
              </div>
            ) : null,
            'Add at least five photo'
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'location',
            'Location',
            listing.city ? (
              <div>
                <div>{listing.address}</div>
                <div>
                  {listing.city}, {listing.country}
                </div>
              </div>
            ) : null,
            'No location added'
          )}
        </li>
        <li>
          {renderBoxWithStatus(
            'plan',
            'Plan',
            <div className="flex flex-wrap  gap-2 text-gray-600">
              <span>{`${listing.numberOfBeds} beds`}</span>
              <span>●</span>
              <span>{`${listing.numberOfBathrooms} rooms`}</span>
              <span>●</span>
              <span>{`${listing.numberOfRooms} bathrooms`}</span>
              <span>●</span>
              <span>{`${listing.maxNumberOfGuests} guests`}</span>
              <span>●</span>
              <span>{`${listing.minNumberOfNights} nights`}</span>

            </div>,
            'No plan added'
          )}
        </li>
      </ul>
    </div>
  );
}
