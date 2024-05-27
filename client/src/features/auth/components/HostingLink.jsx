import useUser from '../hooks/useUser';
import { Link } from 'react-router-dom';

export default function HostingLink() {
  const { user } = useUser();

  return (
    <div className="font-medium hidden md:block ">
      {!user || !user.isHost ? (
        <Link
          className="px-4 py-2  rounded-full hover:bg-slate-100 duration-200"
          to={'/host/homes'}
        >
          Join as host
        </Link>
      ) : (
        <Link
          className="px-4 py-2 rounded-full hover:bg-slate-100 duration-200"
          to={'/hosting/today'}
        >
          Switch to hosting
        </Link>
      )}
    </div>
  );
}
