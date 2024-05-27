import { useEffect, useRef } from 'react';

export default function UploadWidget({ onUpload, children }) {
  const cloudinryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinryRef.current = window.cloudinary;

    widgetRef.current = cloudinryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        sources: ['local', 'camera'],
        clientAllowedFormats: ['image'],
        multiple: false,
        maxFileSize: 1 * 1024 * 1024,

        uploadComplete: (result) => {
          console.log(result.info.url);
        },
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          onUpload(result.info.url);
        }
      }
    );
  }, []);

  return <button onClick={() => widgetRef.current.open()}>{children}</button>;
}
