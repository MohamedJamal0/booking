import { FaChevronLeft } from 'react-icons/fa';
import Logo from '../components/Logo';

import CreateBooking from '../features/bookings/user/components/CreateBooking';
import useBookedListingDetails from '../features/bookings/user/hooks/useBookedListingDetails';
import Loading from '../components/ui/Loading';
import BookedListingTripDetails from '../features/bookings/user/components/BookedListingTripDetails';
import BookedListingCardDetails from '../features/bookings/user/components/BookedListingCardDetails';

import {
  useNavigate,
  useParams,
  createSearchParams,
  useSearchParams,
} from 'react-router-dom';

export default function BookingPage() {
  const { bookedPlaceDetails, isLoading } = useBookedListingDetails();
  const [urlSearchParams] = useSearchParams();

  const { listingId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/listings/${listingId}?${createSearchParams(urlSearchParams)}`);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen ">
        <Loading />
      </div>
    );

  return (
    <div>
      <header className="flex items-center h-20 px-6 border-b">
        <Logo />
      </header>
      <main className="max-w-7xl py-16 px-[5%] mx-auto">
        <section className="flex items-center pb-8 ">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-12 h-12 -ml-12"
          >
            <FaChevronLeft />
          </button>
          <h1 className="font-medium text-3xl">Request to Book</h1>
        </section>
        <section className="flex flex-col-reverse gap-7  lg:flex-row lg:gap-0">
          <div className="flex-1">
            <BookedListingTripDetails {...bookedPlaceDetails} />
            <CreateBooking pricePerNight={bookedPlaceDetails.pricePerNight} />
          </div>
          <aside className="relative flex-1 ">
            <BookedListingCardDetails {...bookedPlaceDetails} />
          </aside>
        </section>
      </main>
    </div>
  );
}
