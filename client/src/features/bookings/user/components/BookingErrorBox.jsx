import { IoIosAlert } from 'react-icons/io';

export default function BookingErrorBox({ message }) {
  return (
    <div className=" flex  gap-5 p-5 border rounded-md ">
      <IoIosAlert className="w-14 h-14 text-red-600" />
      <div>
        <h3 className="font-medium">Booking Failed</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}
