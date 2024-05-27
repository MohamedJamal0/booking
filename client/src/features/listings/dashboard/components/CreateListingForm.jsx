import Input from '../../../../components/ui/Input';
import useCreateListing from '../hooks/useCreateListing';
import { useState } from 'react';

export default function CreatePlaceForm({ onClose }) {
  const { createListing, isLoading } = useCreateListing();

  const [title, setTitle] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await createListing({ title });
    onClose();
  };

  return (
    <form className="px-6 py-4" onSubmit={handleOnSubmit}>
      <h1 className="text-lg mb-3 font-medium">Give your listing nice title</h1>
      <Input
        id={'placeTitle'}
        label={'Place Title '}
        type={'text'}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="flex justify-end py-3">
        <button
          disabled={isLoading || !title}
          type="submit"
          className=" px-4  py-2 rounded-md bg-blue-800 hover:bg-blue-700 text-white  "
        >
          Create
        </button>
      </div>
    </form>
  );
}
