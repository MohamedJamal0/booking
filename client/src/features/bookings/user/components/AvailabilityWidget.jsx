import useSearchParamsFromUrl from '../../../../hooks/useListingSearchParams';

import SelectBookingGuests from './SelectBookingGuests';
import useListingAvailability from '../hooks/useListingAvailability';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { getDifferenceInDays } from '../../../../utils/helper';

export default function AvailabilityWidget({
  pricePerNight,
  maxNumberOfGuests,
  minNumberOfNights,
}) {
  const navigate = useNavigate();
  const { listingId } = useParams();
  const {
    startDate,
    endDate,
    numAdults,
    numChildren,
    numInfants,
    totalGuests,
  } = useSearchParamsFromUrl();

  const { isAvailable, isLoading } = useListingAvailability({
    listingId,
    startDate,
    endDate,
  });

  console.log(maxNumberOfGuests);

  const handleNavigate = () => {
    if (!isAvailable) return;

    const query = { startDate, endDate, numAdults: numAdults || 1 };

    if (numChildren) query.numChildren = numChildren;
    if (numInfants) query.numInfants = numInfants;

    navigate({
      pathname: `/book/${listingId}`,
      search: createSearchParams(query).toString(),
    });
  };

  const numberOfNights = getDifferenceInDays(startDate, endDate);

  const isExceedsMaxGuests = totalGuests > maxNumberOfGuests;

  const isBelowMinNights = numberOfNights < minNumberOfNights;

  const isDisabled =
    !startDate ||
    !endDate ||
    !isAvailable ||
    isExceedsMaxGuests ||
    isBelowMinNights;

  let errorMessage;

  if (isExceedsMaxGuests) {
    errorMessage = `Maximum number of guests is ${maxNumberOfGuests}`;
  }
  if (!isAvailable) {
    errorMessage = 'these date is not available';
  }
  if (isBelowMinNights) {
    errorMessage = `Minimum stay is ${minNumberOfNights} nights`;
  }

  return (
    <div className="sticky top-24 left-0 w-full p-6 mt-8 mb-12 shadow-xl rounded-md border bg-white">
      <div className="mb-6">
        <span className="font-medium text-xl">{`$${+pricePerNight}`}</span>
        <span className="text-gray-500"> night</span>
      </div>
      <div className="shadow">
        <a
          href="#select-dates"
          className="flex w-full text-left rounded-t-md text-sm border"
        >
          <div className="flex-1 border-r px-3 pt-2 pb-3 border-gray-300 ">
            <div className="text-xs">CHECK-IN</div>
            {startDate ? (
              <div>{startDate}</div>
            ) : (
              <div className="text-gray-500">Add Dates</div>
            )}
          </div>
          <div className="flex-1 border-r px-3 pt-2 pb-3 border-gray-300  ">
            <div className="text-xs">CHECK-OUT</div>
            {endDate ? (
              <div>{endDate}</div>
            ) : (
              <div className="text-gray-500">Add Dates</div>
            )}
          </div>
        </a>
        <SelectBookingGuests maxGuests={maxNumberOfGuests} />
      </div>
      <button
        onClick={handleNavigate}
        disabled={isDisabled}
        className="w-full py-4 mt-4 rounded-md font-medium bg-blue-800 text-white hover:bg-blue-700 duration-300"
      >
        {isAvailable ? 'Reserve' : 'check availability'}
      </button>
      <div className="mt-2 text-xs text-center text-red-500">
        {errorMessage && !isLoading && <div>{errorMessage}</div>}
      </div>
      {!isDisabled && (
        <div>
          <div className="mt-2 text-sm text-center text-gray-500">
            You will not be charged yet
          </div>
          <div className="flex justify-between mt-6">
            <div>
              ${+pricePerNight} x {numberOfNights} nights
            </div>
            <div>${+pricePerNight * numberOfNights}</div>
          </div>
          <div className="mt-5 py-5 border-t">
            <div className="flex justify-between font-medium">
              <div>Total</div>
              <div>${+pricePerNight * numberOfNights}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
