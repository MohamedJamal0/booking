import { useState } from 'react';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';

export default function useListingsFilterForm() {
  const {
    minPrice,
    maxPrice,
    type,
    category,
    amenities,
    updateListingSearchParams,
  } = useListingSearchParams();

  const [filter, setFilter] = useState({
    minPrice: minPrice || 10,
    maxPrice: maxPrice || 560,
    type,
    category,
    amenities: amenities ? amenities : [],
  });

  const updateFilter = ({ key, value }) =>
    setFilter((prev) => ({ ...prev, [key]: value }));

  const updateAmenities = (value) => {
    setFilter((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(value)
        ? prev.amenities.filter((item) => item !== value)
        : [...prev.amenities, value],
    }));
  };

  const resetFilter = () => {
    setFilter({
      minPrice: 10,
      maxPrice: 560,
      amenities: [],
      type: '',
    });
  };

  const submitFilter = () => updateListingSearchParams(filter);

  return { filter, updateFilter, submitFilter, resetFilter, updateAmenities };
}
