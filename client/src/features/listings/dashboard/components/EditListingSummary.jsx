import { useState } from 'react';
import SaveEditListing from './SaveEditListing';
import useHostListing from '../hooks/useHostListing';
import useUpdateListing from '../hooks/useUpdateListing';

export default function EditListingSummary() {
  const { listing } = useHostListing();

  const [summary, setSummary] = useState(listing.summary || '');

  const { updateListing, isLoading } = useUpdateListing();

  const handleSaveUpdate = () => updateListing({ summary: summary.trim() });

  return (
    <div className="">
      <h1 className="mb-8 font-medium text-3xl">Tell us about your place</h1>
      <textarea
        onChange={(e) => setSummary(e.target.value)}
        defaultValue={summary}
        className="w-full  h-[200px] p-5 border rounded-md text-2xl focus:outline-none"
      />
      <SaveEditListing
        onSave={handleSaveUpdate}
        loading={isLoading}
        isDisabled={!summary.trim()}
      />
    </div>
  );
}
