import useGetStaysCounts from '../hooks/useGetStaysCounts';

export default function StaysFilter({ onClick, filter, isLoading }) {
  const { staysCounts } = useGetStaysCounts();

  const {
    numberOfUpcomingBookingsCount,
    numberOfArrivingSoonBookingsCount,
    numberOfCurrentHostBookingsCount,
    numberOfCheckedOutBookingsCount,
  } = staysCounts;

  const options = [
    {
      label: 'Upcoming',
      value: 'upcoming',
      count: numberOfUpcomingBookingsCount,
    },
    {
      label: 'Arriving soon',
      value: 'arriving-soon',
      count: numberOfArrivingSoonBookingsCount,
    },
    {
      label: 'Currently hosting',
      value: 'current-host',
      count: numberOfCurrentHostBookingsCount,
    },
    {
      label: 'Cheking out',
      value: 'checked-out',
      count: numberOfCheckedOutBookingsCount,
    },
  ];

  return (
    <div role="radiogroup" className="flex flex-wrap gap-4 mb-8">
      {options.map(({ label, value, count }) => (
        <button
          type="button"
          aria-checked={value === filter}
          role="radio"
          disabled={isLoading}
          key={label}
          onClick={() => onClick(value)}
          className="px-4 py-2 rounded-full border text-sm aria-checked:border-black aria-checked:bg-gray-100 duration-200"
        >
          {`${label} (${count})`}
        </button>
      ))}
    </div>
  );
}
