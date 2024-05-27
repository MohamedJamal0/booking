import { useQuery } from '@tanstack/react-query';
import { createBookingIntentPayment as createBookingIntentPaymentApi } from '../services';
import { useParams } from 'react-router-dom';
import { handleAxiosError } from '../../../../utils/helper';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';

const useCreateBookingIntentPayment = () => {
  const { startDate, endDate, numAdults, numInfants, numChildren } =
    useListingSearchParams();

  const { listingId } = useParams();

  console.log(startDate, endDate);

  const bookingPayload = {
    checkIn: startDate,
    checkOut: endDate,
    listingId: +listingId,
    numberOfAdults: +numAdults,
    numberOfInfants: +numInfants,
    numberOfChildren: +numChildren,
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [
      'bookingIntent',
      startDate,
      endDate,
      listingId,
      numAdults,
      numInfants,
      numChildren,
    ],
    retry: 1,

    queryFn: () =>
      createBookingIntentPaymentApi({
        ...bookingPayload,
        listingId: +listingId,
      }),
  });

  let bookingError = null;

  if (error) {
    bookingError = handleAxiosError(error);
  }

  return { data, error: bookingError, isLoading };
};

export default useCreateBookingIntentPayment;
