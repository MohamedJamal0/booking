import { formatDate, timeDistance } from '../../../../utils/helper';

import ReviewModal from '../../../reviews/ReviewModal';
import Cldimage from '../../../../components/Cldimage';

export default function TripBookingCard({ booking }) {
  const timeAgo = timeDistance(booking.checkIn);

  const formattedCheckinDate = formatDate(booking.checkIn, ' MMM dd ,yyy');
  const formattedCheckoutDate = formatDate(booking.checkOut, 'MMM dd ,yyy');

  return (
    <div className="flex flex-col-reverse md:flex-row  max-w-4xl  rounded-md shadow-md overflow-hidden">
      <div className="flex-1 p-8">
        <h3 className="text-lg font-medium">{booking.listing.title}</h3>
        <p className="text-gray-500 pb-4 border-b">
          {booking.listing.type.name}
        </p>
        <div className="py-4 flex gap-6 border-b">
          <div>
            <p className="text-lg">{formattedCheckinDate}</p>
            <p className="text-gray-500 font-medium">To</p>
            <p className="text-lg">{formattedCheckoutDate}</p>
          </div>
          <div className=" border-r"></div>
          <div className="text-lg">
            {booking.listing.city} ,{booking.listing.country}
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="inline-block  px-4 py-2 font-medium rounded-md bg-slate-200">
            {booking.status.name}
          </span>
          {booking.status.name === 'checked-out' && (
            <ReviewModal
              review={booking.review}
              bookingId={booking.id}
              listingId={booking.listing.id}
            />
          )}
        </div>
      </div>
      <div className="relative flex-1">
        <Cldimage
          url={booking.listing.images[0].imageUrl}
          width={600}
          height={600}
          className="w-full h-full aspect-video object-cover bg-slate-200"
        />
        <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded-md font-medium">
          {timeAgo}
        </div>
      </div>
    </div>
  );
}
