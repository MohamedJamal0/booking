import Modal from '../../../../components/ui/Modal';
import useToggle from '../../../../hooks/useToggle';
import useDeleteListing from '../hooks/useDeleteListing';
import { LuTrash } from 'react-icons/lu';

export default function DeleteListing({ listingId }) {
  const { toggle, handleToggle } = useToggle();
  const { deleteListing, isLoading } = useDeleteListing();

  const handleDelete = async () => {
    await deleteListing(listingId);
    handleToggle();
  };

  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="absolute top-2 right-2 rounded-full px-3 py-2 z-20 bg-white hover:bg-gray-200 duration-200">
        <LuTrash className="w-4 h-4 text-black" />
      </Modal.Open>
      <Modal.Window>
        <Modal.Header>Remove listing</Modal.Header>
        <Modal.Body className=" p-6 w-[90vw] sm:max-w-lg">
          <p>Are you sure you want to remove this listing?</p>
          <div className="flex justify-end gap-4 mt-4">
            <button className="text-gray-500" onClick={handleToggle}>
              Cancel
            </button>
            <button
              disabled={isLoading}
              onClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1 rounded-md"
            >
              {isLoading ? 'Removing...' : 'Remove'}
            </button>
          </div>
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
