import useCreateBookingIntentPayment from '../hooks/useCreateBookingIntentPayment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import Loading from '../../../../components/ui/Loading';
import BookingErrorBox from './BookingErrorBox';

const BookingPayment = () => {
  const { data, isLoading, error } = useCreateBookingIntentPayment();

  if (isLoading)
    return (
      <div className="flex items-center justify-center ">
        <Loading />
      </div>
    );

  if (error) return <BookingErrorBox message={error.message} />;

  return (
    <div>
      <Elements
        stripe={loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)}
        options={{ clientSecret: data?.clientSecret }}
      >
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default BookingPayment;
