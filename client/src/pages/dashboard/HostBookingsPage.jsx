import HostingPageLoading from '../../components/HostingPageLoading';
import BookingFilter from '../../features/bookings/dashboard/components/BookingFilter';
import BookingTable from '../../features/bookings/dashboard/components/BookingTable';
import useBookings from '../../features/bookings/dashboard/hooks/useBookings';

export default function HostingBookingsPage() {
  const { bookings, isLoading } = useBookings();

  if (isLoading) return <HostingPageLoading />;
  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <h1 className="text-3xl font-medium mb-6">Reservations</h1>
      <BookingFilter />
      <BookingTable bookings={bookings} />
    </div>
  );
}
