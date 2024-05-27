import useListingCategories from '../hooks/useListingCategories';
import ListingCategoriesLoading from './ListingCategoriesLoading';
import ListingCategories from './ListingCategories';

export default function ListingCategoriesProvider() {
  const { categories, isLoading } = useListingCategories();

  return isLoading ? (
    <ListingCategoriesLoading />
  ) : (
    <ListingCategories categories={categories} />
  );
}
