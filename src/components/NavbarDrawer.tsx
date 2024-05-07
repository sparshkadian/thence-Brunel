import { SetStateAction, useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { Link } from 'react-router-dom';

const NavBarDrawer = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      setOpen(true);
    }
  });

  const onClose = () => {
    setOpen(false);
    setMenuOpen(false);
  };

  return (
    <Drawer onClose={onClose} open={open}>
      <div className='flex flex-col gap-7'>
        <Link
          to='/register'
          className='border-2 py-[26.11px] px-[41.78px] rounded-[107.06px] hover:bg-[#EAEAEA] transition-all duration-300 ease-in-out hover:text-black'
        >
          Get Projects
        </Link>
        <Link
          to='/'
          className='py-[26.11px]  px-[49.61px] rounded-[107.06px] bg-[#1C1C1C]  text-white hover:bg-[#454444] transition-all duration-300 ease-in-out hover:text-white'
        >
          Onboard Talent
        </Link>
      </div>
    </Drawer>
  );
};

export default NavBarDrawer;
