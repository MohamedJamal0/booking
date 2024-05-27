import { useEffect } from 'react';
import useUser from '../features/auth/hooks/useUser';
import UserBookings from '../features/bookings/user/components/UserBookings';

import { useNavigate } from 'react-router-dom';

import Header2 from '../layout/Header2';
export default function TripsPage() {
  const { user, isLoading } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/');
    }
  }, [user, isLoading]);

  return (
    <div>
      <Header2 />
      <main className="max-w-7xl mx-auto px-[2%]">
        <h1 className="py-6  font-medium text-3xl">Trips</h1>
        <UserBookings />
      </main>
    </div>
  );
}
