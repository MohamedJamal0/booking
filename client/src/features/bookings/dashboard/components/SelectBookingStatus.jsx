import useCheckIn from '../hooks/useCheckIn';
import useCheckOut from '../hooks/useCheckOut';
import { timeDistance, isTodayOrBefore } from '../../../../utils/helper';

export default function SelectBookingStatus({
  checkInDate,
  checkOutDate,
  status,
  id,
}) {
  console.log(isTodayOrBefore(checkInDate));

  const isCheckedOut =
    isTodayOrBefore(checkOutDate) && status.name === 'checked-in';

  const isCheckedIn =
    isTodayOrBefore(checkInDate) && status.name === 'confirmed';

  const { checkIn, isCheckingIn } = useCheckIn();

  const { checkOut, isCheckingOut } = useCheckOut();

  const timeAgo = timeDistance(checkInDate);

  if (isCheckedIn)
    return (
      <button
        onClick={() => checkIn(id)}
        disabled={isCheckingIn}
        className="px-4 py-2 bg-black rounded-md  text-sm font-medium text-white"
      >
        {isCheckingIn ? 'Checking in...' : 'Check in'}
      </button>
    );

  if (isCheckedOut)
    return (
      <button
        onClick={() => checkOut(id)}
        disabled={isCheckingOut}
        className="px-4 py-2 bg-black rounded-md  text-sm font-medium text-white"
      >
        {isCheckingOut ? 'Checking out...' : 'Check out'}
      </button>
    );

  if (!isCheckedIn && !isCheckedOut)
    return (
      <span className="px-3 py-2 min-w-fit rounded-md font-medium bg-gray-200 ">
        {timeAgo}
      </span>
    );
}
