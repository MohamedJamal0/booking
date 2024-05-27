import useUserBookings from '../hooks/useUserBookings';
import NotFoundBookings from './NotFoundBookings';
import TripBookingCard from './TripBookingCard';
import UserBookingsLoading from './UserBookingsLoading';

const UserBookings = () => {
  const { bookings, isLoading } = useUserBookings();

  if (isLoading) return <UserBookingsLoading />;

  return (
    <div>
      {bookings.length === 0 ? (
        <NotFoundBookings />
      ) : (
        <ul className="py-12 flex flex-col gap-8">
          {bookings.map((booking) => (
            <TripBookingCard key={booking.id} booking={booking} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserBookings;
