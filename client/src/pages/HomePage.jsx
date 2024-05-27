import Header from '../layout/Header';
import ListingsProvider from '../features/listings/user/components/ListingsProvider';
import ListingCategoriesProvider from '../features/listings/user/components/ListingCategoriesProvider';
import ListingsFilterModal from '../features/listings/user/components/filter/ListingsFilterModal';

export default function HomePage() {
  return (
    <div>
      <Header />
      <nav className="sticky z-20 top-[80px] py-6 border-b bg-white ">
        <div className="flex items-center gap-5  px-[5%] mx-auto">
          <ListingCategoriesProvider />
          <ListingsFilterModal />
        </div>
      </nav>
      <main>
        <ListingsProvider />
      </main>
    </div>
  );
}
