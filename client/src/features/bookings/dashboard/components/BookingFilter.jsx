import { useSearchParams } from 'react-router-dom';

export default function BookingFilter() {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  const handleFilter = (status) => () => {
    urlSearchParams.set('status', status);
    urlSearchParams.set('page', 1);
    setUrlSearchParams(urlSearchParams);
  };

  const currentStatus = urlSearchParams.get('status') || 1;

  const options = [
    { value: 1, label: 'Upcoming' },
    { value: 2, label: 'Checked in' },
    { value: 3, label: 'Checked out' },
  ];

  return (
    <div
      role="tablist"
      className="flex items-center gap-4 mb-5 text-zinc-800 font-medium"
    >
      {options.map((option) => (
        <button
          key={option.value}
          role="tab"
          aria-selected={+currentStatus === option.value}
          onClick={handleFilter(option.value)}
          className="px-3 py-2 rounded-md hover:bg-gray-100 duration-200 aria-selected:bg-gray-100 "
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
