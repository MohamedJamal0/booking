import Reviews from '../features/reviews/Reviews';
import SelectBookingDates from '../features/bookings/user/components/SelectBookingDates';

import AvailabilityWidget from '../features/bookings/user/components/AvailabilityWidget';
import ListingImagesGallery from '../features/listings/user/components/ListingImagesGallery';
import ListingDetails from '../features/listings/user/components/ListingDetails';

import Map from '../components/Map';
import useListing from '../features/listings/user/hooks/useListing';

import ListingPageLoading from '../components/ListingPageLoading';
import Header2 from '../layout/Header2';

export default function ListingPage() {
  const { listing, isLoading } = useListing();

  return (
    <>
      <Header2 />
      <main className="max-w-7xl mx-auto pb-10 px-[2%]">
        {isLoading ? (
          <ListingPageLoading />
        ) : (
          <>
            <section>
              <h1 className="text-xl font-medium py-5 ">{listing.title}</h1>
              <ListingImagesGallery
                images={listing.images.map((i) => i.imageUrl)}
              />
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 border-b">
              <div className="lg:col-span-2">
                <ListingDetails {...listing} />
                <SelectBookingDates minNights={listing.minNumberOfNights} />
              </div>
              <aside className="relative lg:col-span-1">
                <AvailabilityWidget {...listing} />
              </aside>
            </section>
            <section className="py-12 border-b">
              <h2 className="mb-6 text-xl font-medium">Where you’ll be</h2>
              <p>
                {listing.city}, {listing.country}
              </p>
              <div className="mt-6 h-[218px] md:h-[480px]">
                <Map
                  latitude={listing.latitude}
                  longitude={listing.longitude}
                />
              </div>
            </section>
            <section className="py-12 border-b">
              <Reviews
                numberOfReviews={listing.numberOfReviews}
                averageRating={listing.averageRating}
              />
            </section>
          </>
        )}
      </main>
    </>
  );
}
