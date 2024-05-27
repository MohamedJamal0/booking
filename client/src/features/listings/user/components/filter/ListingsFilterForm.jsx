import PlaceAmenitiesCheckBox from './ListingAmenitiesCheckBox';
import PlacePriceInput from './ListingPriceInput';
import PlaceTypeRadioInput from './ListingTypeInput';
import useListingsFilterForm from '../../hooks/useListingsFilterForm';

export default function ListingsFilterForm({ placeAmenities, onClose }) {
  const { filter, updateFilter, updateAmenities, submitFilter, resetFilter } =
    useListingsFilterForm();

  const { minPrice, maxPrice, type, amenities } = filter;

  const handleSubmit = () => {
    submitFilter();
    onClose();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="relative pt-4 pb-10  h-[70dvh] px-6 overflow-y-scroll ">
        <PlaceTypeRadioInput
          onClick={(value) => updateFilter({ key: 'type', value })}
          value={type}
        />
        <PlacePriceInput
          minPrice={minPrice}
          maxPrice={maxPrice}
          onChange={updateFilter}
        />

        {/* <div className="border-b py-8">
          <h2 className="text-xl font-medium mb-2">Rooms and beds</h2>
        </div> */}
        <PlaceAmenitiesCheckBox
          values={amenities}
          placeAmenities={placeAmenities}
          onCheck={(id) => updateAmenities(id)}
        />
      </div>
      <div className="bottom-0 left-0 z-10 flex justify-between w-full px-5  bg-white ">
        <button className="font-medium" onClick={resetFilter}>
          Clear all
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-md bg-black text-white "
        >
          Search
        </button>
      </div>
    </>
  );
}
