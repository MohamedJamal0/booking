import { useState } from 'react';
import Input from '../../../../components/ui/Input';
import SaveEditListing from './SaveEditListing';

import useCity from '../../../../hooks/useCity';
import Loading from '../../../../components/ui/Loading';
import LocationPicker from '../../../../components/LocationPicker';
import useHostListing from '../hooks/useHostListing';
import useUpdateListing from '../hooks/useUpdateListing';

export default function EditListingLocation() {
  const { listing } = useHostListing();
  
  const [location, setLocation] = useState({
    latitude: listing?.latitude || 0,
    longitude: listing?.longitude || 0,
  });


  const { data, isLoadingCity } = useCity({
    lat: location.latitude,
    long: location.longitude,
  });

  const { updateListing, isLoading: isUpdating } = useUpdateListing();

  const handleUpdatePosition = ({ latitude, longitude }) => {
    setLocation((prev) => ({ ...prev, latitude, longitude }));
  };

  const handleSaveUpdate = () => {
    const { latitude, longitude } = location;
    const { city, countryName: country } = data;

    if (!latitude || !longitude || !city || !country) return;

    updateListing({
      latitude,
      longitude,
      city,
      country,
    });
  };

  const isDisabled = !location.latitude || !location.longitude;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-medium lg:shrink-0 ">
          Tell us where your place is located
        </h1>
        <SaveEditListing
          onSave={handleSaveUpdate}
          loading={isUpdating}
          isDisabled={isDisabled}
        />
      </div>

      <div className="w-full h-[300px] mb-2">
        <LocationPicker
          latitude={location.latitude}
          longitude={location.longitude}
          onChange={handleUpdatePosition}
        />
      </div>

      {isLoadingCity ? (
        <div className="flex items-center justify-center h-[155px]">
          <Loading />
        </div>
      ) : (
        <>
          <Input
            id={'city'}
            type={'text'}
            label={'City'}
            name={'city'}
            value={data?.city}
            disabled
          />
          <Input
            id={'country'}
            type={'text'}
            label={'Country'}
            name={'country'}
            value={data?.countryName}
            disabled
          />
        </>
      )}
    </div>
  );
}
