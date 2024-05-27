import { useState } from 'react';
import useHostListing from '../hooks/useHostListing';
import useUpdateListing from '../hooks/useUpdateListing';
import SaveEditListing from './SaveEditListing';

export default function EditListingTitle() {
  const { updateListing, isLoading } = useUpdateListing();
  const { listing } = useHostListing();

  const [title, setTitle] = useState(listing.title);

  const handleSaveUpdate = () => updateListing({ title: title.trim() });

  return (
    <div>
      <h1 className="mb-8 font-medium text-3xl">Give your place a title</h1>
      <textarea
        className="w-full  h-[200px] p-5 border rounded-md text-2xl focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <SaveEditListing
        onSave={handleSaveUpdate}
        loading={isLoading}
        isDisabled={!title.trim()}
      />
    </div>
  );
}
