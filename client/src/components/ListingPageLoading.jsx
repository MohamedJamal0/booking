import Skeleton from './ui/Skeleton';

export default function ListingPageLoading() {
  return (
    <div>
      <Skeleton style=" mt-5 mb-5 h-7 w-40  "/>
      <div className="grid grid-cols-5  grid-rows-2 max-h-[28rem] gap-1 [&>*:first-child]:col-span-3 [&>*:first-child]:row-span-2 ">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} style="w-full h-full aspect-[3/2] rounded-md" />
        ))}
      </div>
    </div>
  );
}
