import Modal from '../../components/ui/Modal';
import useToggle from '../../hooks/useToggle';
import ReviewsSortSelect from './ReviewsSortSelect';
import ReviewList from './ReviewList';
import Loading from '../../components/ui/Loading';

export default function ReviewsModal({
  totalReviews,
  reviews,
  isLoading,
  isFetching,
  fetchNextPage,
  hasNextPage,
  setSortBy,
  sortBy,
}) {
  const { toggle, handleToggle } = useToggle();

  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open className="px-4 py-2 border border-black rounded-md font-medium ">{`Show all ${totalReviews} reviews`}</Modal.Open>
      <Modal.Window>
        <Modal.Header />
        <Modal.Body className="px-6 w-[90vw] sm:max-w-lg h-[70vh] overflow-y-scroll">
          <div className="flex justify-between py-7">
            <h2 className="text-xl font-medium">{`${totalReviews} reviews`}</h2>
            <ReviewsSortSelect onSort={setSortBy} sortBy={sortBy} />
          </div>
          {isLoading ? (
            <div className="flex items-center justify-center ">
              <Loading />
            </div>
          ) : (
            <>
              <ReviewList reviews={reviews} />
              {hasNextPage && (
                <button disabled={isFetching} onClick={fetchNextPage}>
                  {isFetching ? 'Loading...' : 'Load More'}
                </button>
              )}
            </>
          )}
        </Modal.Body>
      </Modal.Window>
    </Modal>
  );
}
