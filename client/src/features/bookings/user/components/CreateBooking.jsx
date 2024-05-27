import Loading from '../../../../components/ui/Loading';
import LoginForm from '../../../auth/components/LoginForm';
import SignupModal from '../../../auth/components/SignupModal';
import useUser from '../../../auth/hooks/useUser';
import BookingPayment from './BookingPayment';

export default function CreateBooking() {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <div className="flex items-center justify-center ">
        <Loading />
      </div>
    );

  if (user) return <BookingPayment />;

  if (!user)
    return (
      <div>
        <h2 className="mb-6 text-xl font-medium">Log in or sign up to book</h2>
        <LoginForm />
        <div className="text-sm flex items-center gap-2 ">
          if you do not have an account
          <div className="*:px-0 *:font-medium *:underline ">
            <SignupModal />
          </div>
        </div>
      </div>
    );
}
