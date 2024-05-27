import InputCounter from '../../../../components/InputCounter';
import { useState } from 'react';
import Input from '../../../../components/ui/Input';
import useHostListing from '../hooks/useHostListing';
import SaveEditListing from './SaveEditListing';
import useUpdateListing from '../hooks/useUpdateListing';

export default function EditListingPlan() {
  const { listing } = useHostListing();

  const [plan, setPlan] = useState({
    numberOfBeds: listing.numberOfBeds,
    numberOfRooms: listing.numberOfRooms,
    numberOfBathrooms: listing.numberOfBathrooms,
    maxNumberOfGuests: listing.maxNumberOfGuests,
    minNumberOfNights: listing.minNumberOfNights,
    pricePerNight: listing.pricePerNight || 0,
  });

  const { updateListing, isLoading } = useUpdateListing();
  const handleUpdatePlan = ({ key, value }) => {
    setPlan((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveUpdate = () => {
    updateListing({
      ...plan,
    });
  };

  console.log(plan);

  return (
    <div>
      <h1 className="font-medium text-3xl mb-10 ">
        Share some basics about your place
      </h1>
      <div className="flex flex-col gap-5">
        <InputCounter
          title={'Bathrooms'}
          value={plan.numberOfBathrooms}
          onChange={(value) =>
            handleUpdatePlan({ key: 'numberOfBathrooms', value })
          }
          minValue={1}
        />
        <InputCounter
          title={'Rooms'}
          value={plan.numberOfRooms}
          onChange={(value) =>
            handleUpdatePlan({ key: 'numberOfRooms', value })
          }
          minValue={1}
        />
        <InputCounter
          title={'Beds'}
          value={plan.numberOfBeds}
          onChange={(value) => handleUpdatePlan({ key: 'numberOfBeds', value })}
          minValue={1}
        />
        <InputCounter
          title={'Max Guests'}
          value={plan.maxNumberOfGuests}
          onChange={(value) =>
            handleUpdatePlan({ key: 'maxNumberOfGuests', value })
          }
          minValue={1}
        />
        <InputCounter
          title={'Min Nights'}
          value={plan.minNumberOfNights}
          onChange={(value) =>
            handleUpdatePlan({ key: 'minNumberOfNights', value })
          }
          minValue={1}
        />
        <Input
          label="Price Per Night"
          value={plan.pricePerNight}
          onChange={(e) =>
            handleUpdatePlan({ key: 'pricePerNight', value: e.target.value })
          }
          onBlur={(e) => {
            if (e.target.value < 0 || isNaN(e.target.value))
              handleUpdatePlan({ key: 'pricePerNight', value: 0 });
            else
              handleUpdatePlan({ key: 'pricePerNight', value: e.target.value });
          }}
        />
      </div>
      <SaveEditListing onSave={handleSaveUpdate} loading={isLoading} />
    </div>
  );
}
