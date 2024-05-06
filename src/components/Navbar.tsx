import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='py-3 px-4 flex items-center justify-between'>
      <h1 className='text-4xl tracking-tight font-semibold'>Brunel</h1>

      <div className='flex items-center gap-4'>
        {location.pathname === '/' ? (
          <>
            <Link
              to='/projects'
              className='text-sm border-2 py-4 px-5 rounded-full hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out'
            >
              Get Projects
            </Link>
            <Link
              to='/'
              className='text-sm border-2 border-black p-4 px-5 rounded-full bg-black text-white hover:bg-slate-500 hover:border-slate-500 transition-all duration-300 ease-in-out'
            >
              Onboard Talent
            </Link>
          </>
        ) : (
          <Link to='/'>
            <img
              src='./close.png'
              alt='back-home'
              width={20}
              className='mr-5'
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
