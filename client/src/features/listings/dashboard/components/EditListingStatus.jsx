import { useState } from 'react';
import useHostListing from '../hooks/useHostListing';
import useUpdateListing from '../hooks/useUpdateListing';
import SaveEditListing from './SaveEditListing';

export default function EditListingStatus() {
  const { listing } = useHostListing();

  const [statusId, setStatusId] = useState(listing.status.id);

  const { updateListing, isLoading } = useUpdateListing();

  const handleUpdateStatus = (value) => () => setStatusId(value);

  const handleSaveUpdate = () => {
    updateListing({ statusId });
  };

  const isDisabled = !listing.isCompleted;

  return (
    <div className="max-w-lg mx-auto">
      <img
        src="https://res.cloudinary.com/dfmcyikt4/image/upload/f_auto,q_auto/wjo81th2rvlwmzbbsckt"
        alt=""
        className="w-full aspect-video"
      />
      <div className="flex flex-col gap-4 " role="radiogroup">
        <button
          role="radio"
          aria-checked={statusId === 3}
          onClick={handleUpdateStatus(3)}
          disabled={isDisabled}
          className="p-4 rounded-md border text-left aria-checked:border-black aria-checked:bg-gray-50"
        >
          <span className="font-medium">Listed</span>
          <p className="text-gray-500">
            Your listing appears in search results and can be booked by guests.
          </p>
        </button>
        <button
          role="radio"
          aria-checked={statusId === 2}
          onClick={handleUpdateStatus(2)}
          disabled={isDisabled}
          className="p-4 rounded-md border text-left aria-checked:border-black aria-checked:bg-gray-50"
        >
          <span className="font-medium">Unlisted</span>
          <p className="text-gray-500">
            Your listing will not appear in search results and can not be
            booked. You can set dates to pause.
          </p>
        </button>
      </div>
      <SaveEditListing onSave={handleSaveUpdate} loading={isLoading} />
    </div>
  );
}
