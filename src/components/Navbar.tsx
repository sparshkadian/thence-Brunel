import { Link, useLocation } from 'react-router-dom';
import NavBarDrawer from './NavbarDrawer';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`${
          location.pathname === '/register' ||
          location.pathname === '/register/success'
            ? 'h-[50px]'
            : 'border border-[#EAEAEA] h-[111.17px] pl-10'
        } bg-[#fff]/80 rounded-[65.28px] py-[16.97px] pr-[20.89px] pl-[52.22px]  flex items-center justify-between`}
      >
        <img
          src='../logo.png'
          alt='logo'
          width={121}
          height={30.5}
          className={`${
            location.pathname === '/register' ||
            location.pathname === '/register/success'
              ? 'absolute top-[31.89px] left-[52.22px]'
              : ''
          } `}
        />

        <div className='flex items-center gap-[15.67px]'>
          {location.pathname === '/' ? (
            <>
              <Link
                to='/register'
                className='manrope-medium leading-[24.59px] h-[77.22px] w-[189.56px] text-center hidden md:block border-[1.31px] border-[#EAEAEA] py-[26.11px] px-[41.78px] rounded-[107.06px] hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out'
              >
                Get Projects
              </Link>
              <Link
                to='/'
                className='manrope-medium h-[77.22px] w-[223.39px] text-center hidden md:block py-[26.11px] pr-[49.61px] pl-[41.78px] rounded-[107.06px] bg-[#1C1C1C] text-white hover:bg-[#454444] transition-all duration-300 ease-in-out'
              >
                Onboard Talent
              </Link>
            </>
          ) : (
            <Link to='/'>
              <img
                src='../close.png'
                alt='back-home'
                width={64}
                height={64}
                className={`${
                  location.pathname === '/register/success' ? 'hidden' : 'block'
                } absolute top-[32px] left-[1324px] border border-[#CACACA] rounded-[40px] p-4`}
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
