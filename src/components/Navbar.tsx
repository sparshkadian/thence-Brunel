import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
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
              className='border-2 py-[26.11px] px-[41.78px] rounded-full hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out'
            >
              Get Projects
            </Link>
            <Link
              to='/'
              className='border-2 border-black py-[26.11px]  px-[49.61px] rounded-full bg-black text-white hover:bg-slate-500 hover:border-slate-500 transition-all duration-300 ease-in-out'
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
    </div>
  );
};

export default Navbar;
