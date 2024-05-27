import { useState } from 'react';
import Loading from '../../../../components/ui/Loading';
import { categoriesIcons } from '../../user/components/ListingCategoriesIcons';
import SaveEditListing from './SaveEditListing';
import useHostListing from '../hooks/useHostListing';
import useUpdateListing from '../hooks/useUpdateListing';
import useListingCategories from '../../user/hooks/useListingCategories';

export default function EditListingCategory() {
  const { categories, isLoading: isLoadingCategories } = useListingCategories();

  const { listing } = useHostListing();

  const [categoryId, setCategoryId] = useState(listing.category?.id || null);

  const { updateListing, isLoading: isUpdating } = useUpdateListing();

  const handleSaveUpdate = () => updateListing({ categoryId });

  if (isLoadingCategories)
    return (
      <div className="flex items-center justify-between">
        <Loading />
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl mb-8">
        Which of these best describes your place?
      </h1>
      <div className="grid grid-cols-3 gap-2" role="radiogroup">
        {categories.map(({ id, name }) => (
          <button
            type="button"
            role="radio"
            aria-checked={categoryId === id}
            key={id}
            className="w-full h-22 text-left p-5 border rounded-md aria-checked:border-black aria-checked:bg-gray-100 "
            onClick={() => setCategoryId(id)}
          >
            {categoriesIcons[name]}
            <span>{name[0].toUpperCase() + name.slice(1)}</span>
          </button>
        ))}
      </div>
      <SaveEditListing
        onSave={handleSaveUpdate}
        loading={isUpdating}
        isDisabled={!categoryId}
      />
    </div>
  );
}
