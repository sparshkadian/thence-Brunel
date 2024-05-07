import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5] rounded-[40px] p-[60px] flex flex-col gap-10 sm:flex-row justify-between items-center'>
      <p className='manrope-semibold font-medium text-[#1C1C1C] text-[15px] sm:text-[18px] leading-[19.8px]'>
        &copy; Talup 2023. All Rights Reserved
      </p>

      <div className='flex items-center gap-10 manrope-semibold text-[#1C1C1C] font-normal text-[15px] sm:text-[18px] leading-[19.8px] underline'>
        <Link to='#'>Terms & Conditions</Link>
        <Link to='#'>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
