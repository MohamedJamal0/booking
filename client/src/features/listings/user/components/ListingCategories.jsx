import { TbCategory } from 'react-icons/tb';
import { categoriesIcons } from './ListingCategoriesIcons';
import useListingSearchParams from '../../../../hooks/useListingSearchParams';

export default function ListingCategories({ categories }) {
  const { category, updateListingSearchParams } = useListingSearchParams();

  return (
    <ul className="flex justify-between flex-1 gap-10 overflow-x-auto text-sm">
      <li
        data-active={!category}
        onClick={() => updateListingSearchParams({ category: null })}
        className="flex flex-col items-center gap-1 pb-1 shrink-0 cursor-pointer transition hover:text-black border-gray-600 data-[active=true]:border-b-2"
      >
        <TbCategory className="w-6 h-6" />
        <span>All</span>
      </li>
      {categories?.map(({ id, name }, index) => (
        <li
          key={index}
          data-active={id === +category}
          onClick={() => updateListingSearchParams({ category: id })}
          className="flex flex-col items-center gap-1 pb-1 shrink-0 cursor-pointer transition hover:text-black border-gray-600 data-[active=true]:border-b-2"
        >
          {categoriesIcons[name]}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
