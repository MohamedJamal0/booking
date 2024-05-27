import { useState } from 'react';
import StaysFilter from './StaysFilter';
import StayCard from './StayCard';
import useStays from '../hooks/useStays';
import StaysLoading from './StaysLoading';
import NoResultBox from './NoResultBox';

export default function Stays() {
  const [filter, setFilter] = useState('upcoming');
  const { stays, isLoading } = useStays(filter);

  return (
    <div>
      <StaysFilter filter={filter} onClick={setFilter} isLoading={isLoading} />
      <div className="flex flex-wrap gap-4 *:basis-80">
        {isLoading ? (
          <StaysLoading />
        ) : (
          stays.map((stay) => <StayCard key={stay.id} stay={stay} />)
        )}
      </div>

      {stays?.length === 0 && <NoResultBox filter={filter} />}
    </div>
  );
}
