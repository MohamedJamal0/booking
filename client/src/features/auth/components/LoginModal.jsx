import Modal from '../../../components/ui/Modal';
import LoginForm from './LoginForm';
import useToggle from '../../../hooks/useToggle';
export default function LoginModal() {
  const { toggle, handleToggle } = useToggle();
  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="px-4 py-2 font-medium text-left">Login</Modal.Open>
      <Modal.Window>
        <Modal.Header>Login</Modal.Header>
        <Modal.Body className="px-6 py-6 w-[90vw] sm:max-w-lg">
          <h1 className="mb-6 text-lg font-medium">Welcome to AirBnb</h1>
          <LoginForm onCloseModal={handleToggle} />
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
