import HeroImage from './HeroImage';

const SuccessStories = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='covered-by-your-grace-regular text-[#2DA950] text-[36px] leading-[39.6px]'>
        Success Stories
      </h2>
      <div className='text-center manrope-semibold text-[40px] md:text-[56px] md:leading-[67.2px]'>
        <p>Every success journey</p>
        <p>we've encountered.</p>
      </div>
      <div className='w-full mt-10 md:mt-20 md:grid md:grid-cols-2'>
        {/* Hero Image */}
        <div className='hidden md:block'>
          <HeroImage />
        </div>

        {/* Right Panel */}
        <div className='md:flex-1 p-5 flex flex-col gap-10 self-start md:self-center ml-0 md:ml-20'>
          {/* <img src='../grid.png' alt='grid' /> */}
          <div className='manrope-semibold text-[40px] leading-[48px] text-center md:text-left'>
            <p>Enhance fortune 50</p>
            <p> company's insights</p>
            <p>teams research</p>
            <p>capabilities</p>
          </div>
          <img
            src='../carousel.png'
            alt='carousel'
            width={50}
            className='self-center md:self-start'
          />
          <button className='manrope-semibold text-[20px] leading-[27.32px] self-center md:self-start md:mt-20 flex items-center justify-between gap-2 text-sm rounded-[100px] h-[88px] w-[210px] py-[31px] px-[40px] bg-[#1C1C1C] text-white hover:bg-[#454444] transition-all duration-300 ease-in-out'>
            <p>Explore More</p>
            <img src='../explore-more.png' alt='right-arrow' width={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
