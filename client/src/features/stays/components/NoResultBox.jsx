import { PiCheckSquareOffset } from 'react-icons/pi';

const NoResultBox = ({ filter }) => {
  let noResultsMessage;

  if (filter === 'upcoming') {
    noResultsMessage = 'You currently don’t have any upcoming guests.';
  }
  if (filter === 'arriving-soon') {
    noResultsMessage = 'You don’t have any guests arriving today or tomorrow.';
  }
  if (filter === 'current-host') {
    noResultsMessage = 'You don’t have any guests staying with you right now.';
  }
  if (filter === 'checked-out') {
    noResultsMessage =
      'You don’t have any guests checking out today or tomorrow.';
  }
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-52  bg-slate-50">
      <PiCheckSquareOffset className="w-12 h-12 text-gray-900" />
      <p className=" w-48 text-center text-sm text-gray-900">
        {noResultsMessage}
      </p>
    </div>
  );
};

export default NoResultBox;
