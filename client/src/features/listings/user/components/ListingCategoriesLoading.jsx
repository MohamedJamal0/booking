import Skeleton from '../../../../components/ui/Skeleton';

export default function ListingCategoriesLoading() {
  return (
    <ul className="flex justify-between py-[1px] flex-1 gap-10  overflow-x-auto text-sm">
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className="flex flex-col items-center gap-1 pb-1 shrink-0 "
        >
          <Skeleton style={'w-7 h-7 rounded-full'} />
          <Skeleton style={'w-12 h-4'} />
        </li>
      ))}
    </ul>
  );
}
