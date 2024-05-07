import { Link } from 'react-router-dom';

const SuccessStories = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='covered-by-your-grace-regular text-[#2DA950] text-[36px] leading-[39.6px]'>
        Success Stories
      </p>
      <div className='text-center manrope-semibold text-[56px] leading-[67.2px]'>
        <p>Every success journey</p>
        <p>we've encountered.</p>
      </div>

      <div className='w-full h-[650px] mt-10 grid grid-cols-2'>
        <div className='border border-red-500'>Image Component</div>
        <div className='relative top-[20%] p-5 flex flex-col gap-5'>
          <p className='manrope-semibold text-[40px] leading-[48px]'>
            Enhance fortune 50 <br />
            company’s insights <br /> teams research <br /> capabilities
          </p>

          <img src='../carousel.png' alt='carousel' width={50} />

          <Link
            to='#'
            className='mt-5 flex items-center justify-between gap-2 text-sm rounded-[100px] h-[88px] w-[190px] py-[31px] px-[40px] bg-gradient-to-r from-[#1C1C1C] to-[#454444] text-white hover:bg-slate-500 hover:border-slate-500 transition-all duration-300 ease-in-out'
          >
            <p>Exlpore More</p>
            <img src='../explore-more.png' alt='right-arrow' width={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
