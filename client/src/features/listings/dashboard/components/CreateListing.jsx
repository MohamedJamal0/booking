import Modal from '../../../../components/ui/Modal';
import CreatePlaceForm from './CreateListingForm';
import useToggle from '../../../../hooks/useToggle';
import { FaPlus } from 'react-icons/fa6';

export default function CreateListing() {
  const { toggle, handleToggle } = useToggle();
  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="flex justify-center items-center  w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 duration-300">
        <FaPlus className="w-5 h-5" />
      </Modal.Open>
      <Modal.Window>
        <Modal.Header>Add new place</Modal.Header>
        <Modal.Body className="w-[90vw] sm:max-w-lg">
          <CreatePlaceForm onClose={handleToggle} />
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
