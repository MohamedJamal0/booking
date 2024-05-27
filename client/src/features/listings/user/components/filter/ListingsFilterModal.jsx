import Modal from '../../../../../components/ui/Modal';
import useListingSearchParams from '../../../../../hooks/useListingSearchParams';
import useToggle from '../../../../../hooks/useToggle';
import useListingAmenities from '../../hooks/useListingAmenities';
import ListingsFilterForm from './ListingsFilterForm';

export default function ListingsFilterModal() {
  const { toggle, handleToggle } = useToggle();
  const { type, minPrice, maxPrice, amenities } = useListingSearchParams();
  const { amenities: listingAmenities } = useListingAmenities();

  let numFilters = 0;
  if (type) numFilters++;
  if (minPrice) numFilters++;
  if (maxPrice) numFilters++;
  if (amenities) numFilters++;

  return (
    <Modal open={toggle} onChange={handleToggle}>
      <Modal.Open
        className={`relative h-full py-2 px-6 border rounded-md shadow-sm  text-sm ${
          numFilters && 'border-black'
        }`}
      >
        <span>Filters</span>
        {Boolean(numFilters) && (
          <span className="absolute -top-2 -right-2 flex items-center justify-center text-white bg-black rounded-full w-5 h-5 ">
            {numFilters}
          </span>
        )}
      </Modal.Open>
      <Modal.Body>
        <Modal.Window>
          <Modal.Header>Filters</Modal.Header>
          <Modal.Body className="px-6 py-6 w-[90vw]  md:max-w-3xl">
            <ListingsFilterForm
              placeAmenities={listingAmenities}
              onClose={handleToggle}
            />
          </Modal.Body>
        </Modal.Window>
      </Modal.Body>
    </Modal>
  );
}
