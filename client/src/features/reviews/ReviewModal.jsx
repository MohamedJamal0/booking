import Stars from '../../components/Stars';
import Modal from '../../components/ui/Modal';
import useToggle from '../../hooks/useToggle';
import CreateReviewForm from './CreateReviewForm';
import EditReviewForm from './EditReviewForm';

export default function ReviewModal({ bookingId, listingId, review }) {
  const { toggle, handleToggle } = useToggle();
  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="mt-1">
        <Stars stars={review?.rating || 0} />
        <p className="text-xs font-medium">
          {review ? 'Your review' : 'Leave a review'}
        </p>
      </Modal.Open>
      <Modal.Window>
        <Modal.Header>Rating</Modal.Header>
        <Modal.Body className="p-5 w-[90vw] sm:max-w-lg ">
          {review ? (
            <EditReviewForm onClose={handleToggle} review={review} />
          ) : (
            <CreateReviewForm
              onClose={handleToggle}
              bookingId={bookingId}
              listingId={listingId}
            />
          )}
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
