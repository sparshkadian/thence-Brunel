import Accordian from './Accordian';

const Questions = () => {
  return (
    <div className='h-[813px] relative overflow-hidden mt-10 md:mt-20 bg-[#E8EEE7] rounded-[40px] p-10 flex flex-col md:flex-row'>
      <div className='flex flex-col justify-between md:w-[605px]'>
        <div className='text-center h-[111px] mt-10 lg:ml-[50px] lg:text-left flex flex-col gap-[20px] items-center md:items-start'>
          <p className='h-[25px] covered-by-your-grace-regular text-[32px] leading-[35.2px] text-[#9E9D9D]'>
            What's on your mind
          </p>
          <p className='h-[66px] manrope-semibold text-[45px] md:text-[60px] leading-[66px] text-[#1C1C1C]'>
            Ask Questions
          </p>
        </div>
        <div className='hidden md:block lg:absolute lg:top-[323.61px] lg:left-0'>
          <img src='../union.png' alt='union' className='w-full h-full union' />
        </div>
      </div>
      <div className='mt-5 md:mt-[50px] md:ml-auto'>
        <div className='overflow-hidden'>
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default Questions;
