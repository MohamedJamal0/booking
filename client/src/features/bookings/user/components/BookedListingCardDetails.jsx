import { FaStar } from 'react-icons/fa';
import { getDifferenceInDays } from '../../../../utils/helper';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';

export default function BookedListingCardDetails({
  images,
  type,
  title,
  averageRating,
  numberOfReviews,
  pricePerNight,
}) {
  const { startDate, endDate } = useListingSearchParams();

  const numberOfNights = getDifferenceInDays(startDate, endDate);

  return (
    <div className="p-6 lg:absolute lg:right-0 lg:w-[80%] rounded-md border">
      <div className="flex flex-wrap gap-2 pb-6 border-b">
        <img
          className=" w-32 h-24 rounded-md"
          src={images[0].imageUrl}
          alt=""
        />
        <div className="flex flex-col">
          <div className="text-xs text-gray-400">{type.name}</div>
          <div className="text-sm">{title}</div>
          <div className="flex-1 flex items-end gap-1 text-sm  ">
            <div className="flex items-center gap-1">
              <FaStar className="w-3 h-3" />
              <span className="font-medium">{(+averageRating).toFixed(2)}</span>
              <span className="text-gray-400">{`(${numberOfReviews} reviews)`}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="pb-6 border-b">
          <h2 className="my-6 text-xl font-medium">Price details</h2>
          <div className="flex justify-between">
            <div>{`$${pricePerNight} x ${numberOfNights} nights`}</div>
            <div>${pricePerNight * numberOfNights}</div>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 font-medium   ">
          <div>Total</div>
          <div>${pricePerNight * numberOfNights}</div>
        </div>
      </div>
    </div>
  );
}
