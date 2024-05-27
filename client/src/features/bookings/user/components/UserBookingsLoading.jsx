import Skeleton from '../../../../components/ui/Skeleton';

export default function UserBookingsLoading() {
  return (
    <ul className="py-12 flex flex-col gap-8">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div
            key={index}
            className="flex flex-col-reverse md:flex-row max-w-4xl rounded-md shadow-md overflow-hidden animate-pulse"
          >
            <div className="flex-1 p-8">
              <Skeleton style="h-6 w-3/4 mb-4" />
              <Skeleton style="h-4 w-1/4 mb-4" />
              <div className="py-4 flex gap-6 border-b">
                <div>
                  <Skeleton style="h-6 w-20 mb-2" />
                  <Skeleton style="h-4 w-10 mb-2" />
                  <Skeleton style="h-6 w-20" />
                </div>
                <div className="border-r"></div>
                <Skeleton style="h-6 w-40" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <Skeleton style="h-8 w-24" />
                <Skeleton style="h-8 w-24" />
              </div>
            </div>
            <div className="relative flex-1">
              <Skeleton style="w-full h-full aspect-video object-cover" />
              <Skeleton style="absolute top-2 left-2 h-6 w-12 bg-white" />
            </div>
          </div>
        );
      })}
    </ul>
  );
}
