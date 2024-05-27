const BookingStatus = ({ status }) => {
  const color = {
    confirmed: 'bg-green-100 text-green-600',
    'checked-in': 'bg-yellow-100 text-yellow-600',
    'checked-out': 'bg-red-100 text-red-600',
  };

  return (
    <span className={`px-2 py-1 rounded-full ${color[status]}`}>{status}</span>
  );
};

export default BookingStatus;
