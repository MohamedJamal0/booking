import Logo from '../components/Logo';
import SearchTrigger from '../features/listings/user/components/search/SearchTrgger';
import Searchbar from '../features/listings/user/components/search/Searchbar';
import useToggle from '../hooks/useToggle';
import { useEffect } from 'react';
import UserMenu from '../features/auth/components/UserMenu';
import useIsMobile from '../hooks/useIsMobile';
import HostingLink from '../features/auth/components/HostingLink';
import Overlay from '../components/ui/Overlay';

const Header = () => {
  const { toggle, handleToggle } = useToggle();
  const { isMobile } = useIsMobile();

  // close the search bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && toggle && !isMobile) {
        handleToggle();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [toggle, handleToggle]);

  return (
    <>
      <header
        className="fixed top-0 left-0 z-50 w-full  border-b transition-all duration-600  bg-white aria-expanded:h-48"
        aria-expanded={toggle}
      >
        <div className="flex items-center h-20 px-[5%] gap-[2%]">
          <div className="lg:flex-1 hidden md:block">
            <Logo />
          </div>
          <div className="flex-1 flex justify-center">
            {toggle ? (
              <Searchbar onClose={handleToggle} />
            ) : (
              <SearchTrigger onToggle={handleToggle} />
            )}
          </div>
          <div className="flex-1 justify-end flex items-center gap-4">
            <HostingLink />
            <UserMenu />
          </div>
        </div>
      </header>
      <Overlay show={toggle} onClose={handleToggle} />
    </>
  );
};

export default Header;
