import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='h-[144px] bg-[#F5F5F5] rounded-[40px] p-[60px] flex flex-col gap-10 sm:flex-row justify-between items-center'>
      <div className='flex items-center gap-[10px]'>
        <img src='../copyright.png' alt='copyright' width={24} height={24} />
        <p className='manrope-medium text-[#1C1C1C] text-[15px] sm:text-[18px] leading-[19.8px]'>
          Talup 2023. All Rights Reserved
        </p>
      </div>

      <div className='text-center flex items-center gap-[52px] manrope-normal text-[#1C1C1C] text-[15px] sm:text-[18px] leading-[19.8px] underline'>
        <Link to='#'>Terms & Conditions</Link>
        <Link to='#'>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
