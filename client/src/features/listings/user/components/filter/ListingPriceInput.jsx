import Input from '../../../../../components/ui/Input';

export default function PlacePriceInput({ minPrice, maxPrice, onChange }) {
  const handleResetMaxPrice = () => {
    const isReset = maxPrice <= minPrice || isNaN(maxPrice) || maxPrice <= 0;
    if (isReset) {
      onChange({
        key: 'maxPrice',
        value: 560,
      });
    }
  };

  const handleResetMinPrice = () => {
    const isReset = minPrice >= maxPrice || isNaN(minPrice) || minPrice <= 0;
    if (isReset) {
      onChange({
        key: 'minPrice',
        value: 10,
      });
    }
  };

  return (
    <div className="border-b py-8">
      <h2 className="text-xl font-medium mb-2">Price Range</h2>
      <p className="mb-6 ">Nightly prices before fees and taxes</p>
      <div className="flex gap-2">
        <Input
          type="text"
          name="minPrice"
          label={'Min'}
          value={minPrice}
          onBlur={handleResetMinPrice}
          onChange={(e) => onChange({ key: 'minPrice', value: e.target.value })}
          className="flex-1"
        />
        <Input
          type="text"
          name="maxPrice"
          label={'Max'}
          value={maxPrice}
          onBlur={handleResetMaxPrice}
          onChange={(e) => onChange({ key: 'maxPrice', value: e.target.value })}
          className="flex-1"
        />
      </div>
    </div>
  );
}
