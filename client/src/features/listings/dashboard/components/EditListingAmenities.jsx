import useAddAmenityToListing from '../hooks/useAddAmenityToListing';
import useRemoveAmenityFromListing from '../hooks/useRemoveAmenityFromListing';
import useHostListing from '../hooks/useHostListing';
import useListingAmenities from '../../user/hooks/useListingAmenities';
import Loading from '../../../../components/ui/Loading';
import { amenitiesIcons } from '../../../listings/user/components/ListingAmenitiesIcons';

export default function EditListingAmenities() {
  const { addAmenityToListing } = useAddAmenityToListing();
  const { removeAmenityFromListing } = useRemoveAmenityFromListing();

  const { listing } = useHostListing();

  const { amenities, isLoading: isLoadingAmenities } = useListingAmenities();

  const selectedAmenities = listing?.amenities.map(
    (amenity) => amenity.amenity.id
  );

  const handleCheck = (e, amenity) => {
    const isSelected = e.target.closest('button').ariaChecked === 'true';

    if (isSelected) removeAmenityFromListing(amenity.id);
    else addAmenityToListing(amenity);
  };

  if (isLoadingAmenities)
    return (
      <div className="flex items-center justify-between">
        <Loading />
      </div>
    );

  return (
    <div>
      <h1 className="mb-8 text-3xl">
        Tell guests what your listing has to offer
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {amenities.map(({ id, name }) => (
          <button
            key={id}
            role="checkbox"
            type="button"
            aria-checked={selectedAmenities.includes(id)}
            onClick={(e) => handleCheck(e, { id, name })}
            className="w-full h-22 p-5 border rounded-md text-left aria-checked:border-black aria-checked:bg-gray-100"
          >
            {amenitiesIcons[name]}
            <span className="mt-1 inline-block">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
