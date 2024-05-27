export default function Overlay({ show, onClose }) {
  if (!show) return null;
  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 w-full h-screen bg-black bg-opacity-30 fade-in z-20"
    ></div>
  );
}
