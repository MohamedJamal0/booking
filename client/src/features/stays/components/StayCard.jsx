import {
  formatDate,
  getDifferenceInDays,
  timeDistance,
} from '../../../utils/helper';
import { formatDistanceToNow } from 'date-fns';

export default function StayCard({ stay }) {
  const {
    checkIn,
    checkOut,
    listing,
    user,
    numberOfChildren,
    numberOfAdults,
    numberOfInfants,
  } = stay;

  const numberOfNights = getDifferenceInDays(checkIn, checkOut);

  const totalGuest = numberOfAdults + numberOfChildren + numberOfInfants;

  const timeAgo = timeDistance(checkIn);

  return (
    <div className="w-[300px] border rounded-md overflow-hidden">
      <div className="p-4">
        <div className="mb-4">
          <h3 className="mb-1 font-medium text-lg">{listing.title}</h3>
          <span>{user.firstName + ' ' + user.lastName}</span>
          <span className="text-gray-500">+ {totalGuest} guests</span>
        </div>
        <div className="mb-2">
          <div className="mb-1 font-medium ">{`${timeAgo} - ${numberOfNights} nights`}</div>
          <div>{`${formatDate(checkIn, 'MMM dd')} - ${formatDate(
            checkOut,
            'MMM dd'
          )}`}</div>
        </div>
      </div>
    </div>
  );
}
