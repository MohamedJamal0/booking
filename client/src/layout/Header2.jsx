import Logo from '../components/Logo';
import UserMenu from '../features/auth/components/UserMenu';

const Header2 = () => {
  return (
    <header className="border-b">
      <div className=" flex items-center justify-between h-20 max-w-7xl mx-auto px-[2%] ">
        <div>
          <Logo />
        </div>
        <UserMenu />
      </div>
    </header>
  );
};

export default Header2;
