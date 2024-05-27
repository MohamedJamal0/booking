import Skeleton from '../../../../components/ui/Skeleton';

export default function ListingsLoading() {
  return Array.from({ length: 20 }).map((_, index) => (
    <li key={index}>
      <Skeleton style={'w-full aspect-[3/2.85] mb-2 rounded-md'} />
      <div className="flex justify-between">
        <Skeleton style={'w-[80px] h-[15px] mb-2 '} />
        <Skeleton style={'w-[40px] h-[15px] '} />
      </div>
      <Skeleton style={'w-[60px] h-[15px] '} />
    </li>
  ));
}
