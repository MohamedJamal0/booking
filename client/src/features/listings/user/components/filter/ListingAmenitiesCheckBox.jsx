export default function ListingAmenitiesCheckBox({
  values,
  onCheck,
  placeAmenities,
}) {
  return (
    <div className="py-8">
      <h2 className="text-xl font-medium mb-4">Amenities</h2>
      <div className="grid grid-cols-2 gap-2 text-lg">
        {placeAmenities.map(({ id, name }) => (
          <div key={id} className="flex items-center gap-2">
            <input
              onChange={() => onCheck(id)}
              checked={values.includes(id)}
              className="w-4 h-4 cursor-pointer"
              type="checkbox"
              id={id}
            />
            <label className="cursor-pointer" htmlFor={id}>
              {name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
