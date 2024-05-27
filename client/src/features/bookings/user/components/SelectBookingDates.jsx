import { useParams } from 'react-router-dom';
import DateRangePicker from '../../../../components/DateRangePicker';

import useListingBookedDates from '../hooks/useListingBookedDates';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';
import { useState } from 'react';

import { getDifferenceInDays } from '../../../../utils/helper';

export default function SelectBookingDates({ minNights }) {
  const { listingId } = useParams();
  const { placeBookedDates } = useListingBookedDates(+listingId);

  const { startDate, endDate, updateListingSearchParams } =
    useListingSearchParams();

  const [dates, setDates] = useState({ startDate, endDate });

  const handleDateChange = ({ startDate, endDate }) => {
    setDates({ startDate, endDate });
    if (startDate && endDate && startDate !== endDate) {
      updateListingSearchParams({ startDate, endDate });
    }
  };

  let heading;
  let caption;

  if (!startDate && !endDate) {
    heading = 'Select check-in date';
    caption = 'Add your travel dates for exact pricing';
  }
  if (dates.startDate && dates.startDate === dates.endDate) {
    heading = 'Select check-out date';
    caption = `Minimum stay: ${minNights} nights`;
  }

  if (startDate && endDate && startDate !== endDate) {
    heading = `${getDifferenceInDays(startDate, endDate)} nights`;
    caption = `${startDate} - ${endDate}`;
  }

  return (
    <div id="select-dates" className="py-12">
      <div className="mb-6">
        <h2 className="text-xl font-medium mb-1">{heading}</h2>
        <p className="text-gray-500">{caption}</p>
      </div>
      <DateRangePicker
        value={dates}
        onChange={handleDateChange}
        minDays={minNights}
        disabledDates={placeBookedDates}
      />
    </div>
  );
}
