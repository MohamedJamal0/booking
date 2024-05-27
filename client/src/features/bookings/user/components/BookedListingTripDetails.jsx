import { formatDate } from '../../../../utils/helper';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';

export default function BookedListingTripDetails() {
  const { totalGuests, startDate, endDate } = useListingSearchParams();

  const formattedStartDate = formatDate(startDate, 'dd MMM');
  const formattedEndDate = formatDate(endDate, 'dd MMM');
  return (
    <div className="mt-8">
      <h2 className="mb-6 font-medium text-xl">Your Trip</h2>
      <div className="mb-6">
        <div className=" mb-1 font-medium">Dates</div>
        <div className="text-gray-600">{`${formattedStartDate} - ${formattedEndDate}`}</div>
      </div>
      <div className="mb-6">
        <div className="font-medium">Guests</div>
        <div className="text-gray-600"> {totalGuests || 1} guest</div>
      </div>
    </div>
  );
}
