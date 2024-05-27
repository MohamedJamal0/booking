import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="flex items-center gap-3" to="/">
      <span className="  font-bold text-primary hidden lg:block text-4xl text-blue-800">
        Booking
      </span>
    </Link>
  );
}
