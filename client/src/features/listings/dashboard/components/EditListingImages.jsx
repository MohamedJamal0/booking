import UploadWidget from '../../../../components/UploadWidget';
import Cldimage from '../../../../components/Cldimage';
import toast from 'react-hot-toast';
import useHostListing from '../hooks/useHostListing';
import useAddImageToListing from '../hooks/useAddImageToListing';
import useRemoveImageFromListing from '../hooks/useRemoveImageFromListing';

export default function EditListingImages() {
  const { listing } = useHostListing();
  const { addImageToListing } = useAddImageToListing();
  const { removeImageFromListing } = useRemoveImageFromListing();

  const handleDeleteImage = (imageId) => {
    const isNotAllowed =
      listing.status.name === 'listed' && listing.images.length <= 5;

    if (isNotAllowed) {
      toast.error('You need at least 5 images while the place is listed');
    } else {
      removeImageFromListing(imageId);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">Choose at least 5 images</h1>
      <div>
        <UploadWidget onUpload={addImageToListing}>
          <div className="px-4 py-2 bg-pink-500 text-white rounded-md">
            Upload Images
          </div>
        </UploadWidget>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3  gap-5 flex-wrap mt-16 ">
        {listing.images.map(({ id, imageUrl }) => (
          <li
            key={id}
            className=" relative aspect-[3/2.8] rounded-md overflow-hidden bg-slate-200"
          >
            <Cldimage
              url={imageUrl.split('/').slice(-2).join('/')}
              width={320}
              height={320}
              className="w-full h-full"
            />
            <button
              onClick={() => handleDeleteImage(id)}
              className="flex items-center justify-center w-6 h-6 absolute top-2 right-2 rounded-full bg-red-500  text-white"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
