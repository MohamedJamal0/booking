export default function ListingStatus({ status }) {
  const color = {
    unlisted: 'bg-gray-500',
    listed: 'bg-green-500',
    pending: 'bg-orange-500',
  };
  return <div className={`w-2 h-2 rounded-full ${color[status]}`}></div>;
}
