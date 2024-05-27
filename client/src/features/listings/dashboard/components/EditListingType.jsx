import { useState } from 'react';
import { PiHouse } from 'react-icons/pi';
import { PiDoorOpen } from 'react-icons/pi';
import { PiUsersBold } from 'react-icons/pi';

import SaveEditListing from './SaveEditListing';
import useHostListing from '../hooks/useHostListing';
import useUpdateListing from '../hooks/useUpdateListing';
import useListingTypes from '../../user/hooks/useListingTypes';
import Loading from '../../../../components/ui/Loading';

export default function EditListingType() {
  const TYPES_MAP = {
    'entire home': {
      heading: 'An entire place',
      text: 'Guests have the whole place to themselves.',
      icon: <PiHouse className="w-6 h-6" />,
    },

    room: {
      heading: 'A private room',
      text: 'Guests have the their own room in a home , plus access to shared spaces.',
      icon: <PiDoorOpen className="w-6 h-6" />,
    },

    'shared room': {
      heading: 'A shared room',
      text: ' Guests sleep in a room or common area that may be shared with your or others.',
      icon: <PiUsersBold className="w-6 h-6" />,
    },
  };

  const { listing } = useHostListing();

  const [typeId, setTypeId] = useState(listing.type?.id || null);

  const { types, isLoading: isLoadingTypes } = useListingTypes();

  const { updateListing, isLoading: isCreating } = useUpdateListing();

  const handleSaveUpdate = () => updateListing({ typeId });

  if (isLoadingTypes) return <Loading />;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-medium">
        What type of place will guests have?
      </h1>
      <div role="radiogroup" className="flex flex-col gap-5">
        {types.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => setTypeId(id)}
            type="button"
            role="radio"
            aria-checked={typeId === id}
            className="flex items-center justify-between w-full gap-4 p-6 text-left rounded-md border aria-checked:border-black aria-checked:bg-gray-100 "
          >
            <div>
              <h2 className="text-xl font-medium">{TYPES_MAP[name].heading}</h2>
              <p className=" text-gray-400">{TYPES_MAP[name].text}</p>
            </div>
            {TYPES_MAP[name].icon}
          </button>
        ))}
      </div>
      <SaveEditListing
        onSave={handleSaveUpdate}
        loading={isCreating}
        isDisabled={!typeId}
      />
    </div>
  );
}
