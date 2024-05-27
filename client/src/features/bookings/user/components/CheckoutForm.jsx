import {
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/trips',
      },
      redirect: 'if_required',
    });

    console.log(error, paymentIntent);
    if (error) {
      setProcessing(false);
      return toast.error(error.message);
    }

    if (paymentIntent.status === 'succeeded') {
      setTimeout(() => {
        navigate('/trips');
        setProcessing(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={processing || !stripe}
      >
        {processing ? 'Processing...' : 'Pay now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
