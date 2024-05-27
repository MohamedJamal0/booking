import Table from '../../../../components/Table';

import {
  formatDate,
  formatNumber,
  getDifferenceInDays,
} from '../../../../utils/helper';

import BookingStatus from './BookingStatus';
import SelectBookingStatus from './SelectBookingStatus';

export default function BookingRow({ booking }) {
  const {
    checkIn,
    checkOut,
    total,
    numberOfAdults,
    numberOfChildren,
    numberOfInfants,
    listing,
    status,
    user,
  } = booking;

  const formattedStartDate = formatDate(checkIn, 'MMM dd yyyy');
  const formattedEndDate = formatDate(checkOut, 'MMM dd yyyy');
  const numberOfNights = getDifferenceInDays(checkIn, checkOut);

  return (
    <Table.Row>
      <div role="cell">{listing.title}</div>
      <div className="flex flex-col" role="cell">
        <span>{`${user.firstName} ${user.lastName}`}</span>
        <span className="text-gray-400 text-sm">{numberOfAdults} adult</span>
        {numberOfChildren ? <span>, {numberOfChildren} children</span> : ''}
        {numberOfInfants ? <span>, {numberOfInfants} infants </span> : ''}
      </div>
      <div role="cell" className="flex flex-col">
        <span>{`${numberOfNights} night stay`}</span>
        <span className="text-gray-400 text-xs">
          {formattedStartDate} - {formattedEndDate}
        </span>
      </div>
      <div role="cell" className="uppercase text-sm">
        <BookingStatus status={status.name} />
      </div>
      <div role="cell">$ {formatNumber(total)}</div>
      <div role="cell">
        <SelectBookingStatus
          checkInDate={checkIn}
          checkOutDate={checkOut}
          status={status}
          id={booking.id}
        />
      </div>
    </Table.Row>
  );
}
