export default function Skeleton({ style = '' }) {
  const baseStyles = 'bg-gray-200 animate-pulse';
  const combinedStyles = `${baseStyles} ${style}`;

  return <div className={combinedStyles}></div>;
}
