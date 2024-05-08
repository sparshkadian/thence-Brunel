const Expenses = () => {
  return (
    <div className='-bottom-10 right-10 expenses flex flex-col gap-5 absolute bg-[#002E18] pt-[34px] pr-[30px] pb-[40px] pl-[36px] rounded-[28.36px]'>
      <div className='flex gap-2 items-end'>
        <img src='../expenses.png' alt='dollar' className='w-[100px]' />
        <p className='font-medium text-[22.81px] leading-[31.94px] text-[#A6A3A0]'>
          MILLION
        </p>
      </div>
      <p className='manrope-semibold font-medium text-[#CCC] text-[18px] leading-[23.4px]'>
        Reduced client expenses <br /> by saving on hiring and <br /> employee
        costs.
      </p>
    </div>
  );
};

export default Expenses;
