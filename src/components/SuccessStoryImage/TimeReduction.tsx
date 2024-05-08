const TimeReduction = () => {
  return (
    <div className='cursor-pointer time-reduction absolute top-[110px] left-[100px] p-[30px] rounded-[27.11px] bg-white hover:-translate-y-2 transition-all duration-300 ease-in-out'>
      <div className='relative'>
        <img
          src='../time-reduction.png'
          alt='sparkles'
          className='w-[79.17px] h-[78.48px] absolute -top-[38px] -left-6'
        />
        <p className='switzer-regular font-medium text-[64px] leading-[76.8px] text-[#1C1C1C]'>
          40%
        </p>
      </div>
      <p className='manrope-semibold font-semibold text-[18px] leading-[23.4px] text-[#828282]'>
        Achieved reduction in <br /> project execution time <br /> by optimising
        team <br /> availability
      </p>
    </div>
  );
};

export default TimeReduction;
