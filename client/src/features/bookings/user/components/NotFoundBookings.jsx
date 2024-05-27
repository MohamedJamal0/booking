import { Link } from 'react-router-dom';

const NotFoundBookings = () => {
  return (
    <div className="py-12 border-b border-t">
      <h2 className="font-medium text-2xl mb-2">No trips booked...yet!</h2>
      <p className="text-lg mb-4">
        Time to dust off your bags and start planning your next adventure
      </p>
      <Link
        to={'/'}
        className="inline-block py-3 px-6 rounded-md border border-black  font-medium hover:bg-slate-100 duration-200"
      >
        Start searching
      </Link>
    </div>
  );
};

export default NotFoundBookings;
