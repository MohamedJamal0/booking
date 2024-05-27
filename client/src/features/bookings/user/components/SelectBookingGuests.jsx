import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import useClickOutside from '../../../../hooks/useClickOutside';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';
import InputCounter from '../../../../components/InputCounter';

export default function SelectBookingGuests({ maxGuests }) {
  const [isShow, setIsShow] = useState(false);
  const { ref } = useClickOutside(() => setIsShow(false));

  const {
    numAdults,
    numChildren,
    numInfants,
    totalGuests,
    updateListingSearchParams,
  } = useListingSearchParams();

  const handleUpdateGuests = ({ name, value }) => {
    updateListingSearchParams({ [name]: value });
  };

  const _numAdults = numAdults || 1;
  const _totalGuests = totalGuests || 1;

  const difference = maxGuests - _totalGuests;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsShow(!isShow)}
        className="flex items-center justify-between w-full px-3 pt-2 pb-3 rounded-b-md border border-t-0  border-gray-300 text-left"
      >
        <div>
          <div className="text-xs">GUESTS</div>
          <div>{`${_totalGuests} guests`}</div>
        </div>
        {isShow ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isShow && (
        <div className="absolute top-15 right-0 z-10 w-full px-4 border rounded-md bg-white">
          <InputCounter
            title={'adults'}
            caption={'age 13+'}
            value={numAdults || 1}
            maxValue={_numAdults + difference}
            minValue={1}
            onChange={(value) =>
              handleUpdateGuests({ name: 'numAdults', value })
            }
          />
          <InputCounter
            title={'children'}
            caption={'age 2-12'}
            value={numChildren}
            maxValue={numChildren + difference}
            onChange={(value) =>
              handleUpdateGuests({ name: 'numChildren', value })
            }
          />
          <InputCounter
            title={'infants'}
            caption={'under 2'}
            value={numInfants}
            maxValue={numInfants + difference}
            onChange={(value) =>
              handleUpdateGuests({ name: 'numInfants', value })
            }
          />
        </div>
      )}
    </div>
  );
}
