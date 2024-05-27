import Cldimage from '../../../../components/Cldimage';

export default function ListingImagesGallery({ images }) {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-1 [&>*:first-child]:col-span-3 [&>*:first-child]:row-span-2 ">
      {images.slice(0, 5).map((image) => (
        <Cldimage
          key={image}
          width={800}
          height={600}
          className="w-full h-full aspect-[3/2] rounded-md bg-cover bg-gray-200"
          url={image}
        />
      ))}
    </div>
  );
}
