import useListingSearch from '../../hooks/useListingSearch';
import DateSelector from './DateSelector';

import GuestsSelector from './GuestsSelector';
import { IoClose, IoSearch } from 'react-icons/io5';
import CitySelector from './CitySelector';

export default function Searchbar({ onClose }) {
  const { updateSearchParams, handleSearchSubmit, searchParams } =
    useListingSearch();

  const handleSubmit = () => {
    handleSearchSubmit();
    onClose();
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <ul className="hidden md:flex gap-6  justify-between">
        <li>Stays</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="absolute z-50 left-0 top-0 h-screen w-full px-4 py-3 overflow-y-scroll bg-gray-100 md:top-14 md:left-1/2 md:-translate-x-1/2  md:h-auto md:bg-transparent md:overflow-visible   ">
        <div
          className={`relative flex flex-col gap-4 h-full mx-auto text-sm md:flex-row md:gap-0 md:w-[80vw] md:max-w-3xl md:mt-4 md:border md:rounded-full md:shadow`}
        >
          {/* mobile close button */}
          <button
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 shrink-0  rounded-full bg-white md:hidden "
          >
            <IoClose className="w-5 h-5" />
          </button>
          {/* */}
          <CitySelector
            onChange={updateSearchParams}
            initCity={searchParams.city}
          />
          <DateSelector onChange={updateSearchParams} values={searchParams} />
          <GuestsSelector onChange={updateSearchParams} values={searchParams} />

          <button
            onClick={handleSubmit}
            className="fixed z-10 right-3 bottom-0 -translate-y-1/2  flex gap-1 items-center px-4 py-5 rounded-full font-medium  bg-blue-800 text-white hover:bg-blue-700 duration-200 md:absolute md:top-1/2   "
          >
            <IoSearch className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
