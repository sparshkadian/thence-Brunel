const TimeReduction = () => {
  return (
    <div className='time-reduction absolute top-[110px] left-5 p-[30px] rounded-[27.11px]  bg-white'>
      <div className='relative'>
        <img
          src='../time-reduction.png'
          alt='sparkles'
          className='w-[79.17px] h-[78.48px] absolute -top-[35px] -left-5'
        />
        <p className='font-medium text-[64px] leading-[76.8px] text-[#1C1C1C]'>
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
