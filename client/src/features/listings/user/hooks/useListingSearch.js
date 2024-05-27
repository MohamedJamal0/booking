import { addDays, format } from 'date-fns';
import { useState } from 'react';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';

export default function useListingSearch() {
  const {
    city,
    startDate,
    endDate,
    numAdults,
    numChildren,
    numInfants,
    updateListingSearchParams,
  } = useListingSearchParams();

  const [searchParams, setSearchParams] = useState({
    city,
    startDate,
    endDate,
    numAdults,
    numChildren,
    numInfants,
  });

  const updateSearchParams = (value) => {
    setSearchParams({ ...searchParams, ...value });
  };

  const handleSearchSubmit = () => {
    // at case the user does not select the end date , we add 1 day to the start date
    if (
      searchParams.startDate &&
      searchParams.startDate === searchParams.endDate
    ) {
      const nextDay = addDays(new Date(searchParams.startDate), 1);
      searchParams.endDate = format(nextDay, 'yyyy-MM-dd');
    }

    updateListingSearchParams(searchParams);
  };

  return { searchParams, updateSearchParams, handleSearchSubmit };
}
