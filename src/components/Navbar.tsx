import { Link, useLocation } from 'react-router-dom';
import NavBarDrawer from './NavbarDrawer';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);

  return (
    <>
      <div
        className={`${
          location.pathname === '/register' ||
          location.pathname === '/register/success'
            ? 'h-[50px]'
            : 'border h-[111.17px] pl-10'
        } rounded-full py-[16.97px] px-[20.89px]  flex items-center justify-between`}
      >
        <img
          src='../logo.png'
          alt='logo'
          width={121}
          height={30.5}
          className={`${
            location.pathname === '/register' ||
            location.pathname === '/register/success'
              ? 'ml-0'
              : 'ml-10'
          } `}
        />

        <div className='flex items-center gap-4'>
          {location.pathname === '/' ? (
            <>
              <Link
                to='/register'
                className='hidden md:block border-2 py-[26.11px] px-[41.78px] rounded-[107.06px] hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out'
              >
                Get Projects
              </Link>
              <Link
                to='/'
                className='hidden md:block py-[26.11px]  px-[49.61px] rounded-[107.06px] bg-[#1C1C1C]  text-white hover:bg-[#454444] transition-all duration-300 ease-in-out'
              >
                Onboard Talent
              </Link>
            </>
          ) : (
            <Link to='/'>
              <img
                src='../close.png'
                alt='back-home'
                width={55}
                height={55}
                className={`${
                  location.pathname === '/register/success' ? 'hidden' : 'block'
                } mr-5 border border-[#CACACA] rounded-[40px] px-4 py-4`}
              />
            </Link>
          )}
        </div>

        <img
          onClick={() => {
            setMenuOpen(true);
          }}
          src='../nav-menu.png'
          alt='nav-menuBars'
          width={30}
          className={`${
            location.pathname === '/' ? 'block' : 'hidden'
          } md:hidden mr-10 cursor-pointer`}
        />
      </div>

      <NavBarDrawer menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
