import { Cloudinary } from '@cloudinary/url-gen/index';
import { Resize } from '@cloudinary/url-gen/actions';

export default function Cldimage({ url, width, height, ...props }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
    },
  });
  return (
    <img
      src={cld
        .image(url.split('/').slice(-2).join('/'))
        .resize(Resize.scale().width(width).height(height))
        .toURL()}
      {...props}
    />
  );
}
