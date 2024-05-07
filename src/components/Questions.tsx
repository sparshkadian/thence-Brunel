import Accordian from './Accordian';

const Questions = () => {
  return (
    <div className='bg-[#E8EEE7] rounded-[40px] p-10 flex flex-col sm:flex-row lg:gap-[200px]'>
      <div className='flex flex-col justify-between'>
        <div className='text-center lg:text-normal h-[111px] lg:ml-[50px] mt-10'>
          <p className='covered-by-your-grace-regular text-[32px] leading-[35.2px] text-[#9E9D9D]'>
            What's on your mind
          </p>
          <p className='manrope-semibold text-[45px] md:text-[60px] leading-[66px] text-[#1C1C1C]'>
            Ask Questions
          </p>
        </div>

        <div className='hidden sm:block'>
          <img
            src='../union.png'
            alt='union'
            width={100}
            className='bg-gradient-to-r from-[#70558E] top-[#70558e0]'
          />
          <img
            src='../union-vector.png'
            alt='union-vector'
            width={100}
            className='bg-gradient-to-r from-[#70558E] top-[#70558e0]'
          />
        </div>
      </div>

      <div className='mt-5 md:mt-[100px]'>
        <Accordian />
      </div>
    </div>
  );
};

export default Questions;
