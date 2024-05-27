import { Link } from 'react-router-dom';
import Stays from '../../features/stays/components/Stays';
import useGetStaysCounts from '../../features/stays/hooks/useGetStaysCounts';
import HostingPageLoading from '../../components/HostingPageLoading';
import useUser from '../../features/auth/hooks/useUser';
export default function HostTodayPage() {
  const { staysCounts, isStaysCountsLoading } = useGetStaysCounts();
  const { user } = useUser();

  if (isStaysCountsLoading) return <HostingPageLoading />;

  const { numberOfAllBookingsCount } = staysCounts;

  return (
    <div className="max-w-[1280px] mx-auto px-[3%] py-16">
      <h1 className="text-4xl font-medium mb-14">
        Welcome back , {user.firstName}
      </h1>

      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-medium">Your reservations</h2>
        <Link to={'/hosting/bookings'} className="p-2 font-medium underline">
          {`All reservations (${numberOfAllBookingsCount})`}
        </Link>
      </div>
      <Stays />
    </div>
  );
}
