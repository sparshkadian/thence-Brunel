const RegistrationForm = () => {
  return (
    <div className='max-w-4xl mx-auto mt-20 flex flex-col items-center gap-4'>
      <h2 className='covered-by-your-grace-regular text-[#2DA950] text-[36px] leading-[39.6px]'>
        Registeration Form
      </h2>

      <div className='manrope-semibold flex flex-col gap-1 items-center text-[56px] leading-[67.2px]'>
        <p>Start your success</p>
        <p>Journey here!</p>
      </div>

      <form className='mt-5 flex flex-col gap-[24px] w-2/5'>
        <input
          type='text'
          placeholder='Enter your name'
          className='rounded-full py-4 pl-4 bg-[#EFEFEF] border-none focus:outline-none  focus:outline-blue-400 focus:bg-blue-100/50'
        />
        <input
          type='email'
          placeholder='Enter your email'
          className='rounded-full py-4 pl-4 bg-[#EFEFEF] border-none focus:outline-none focus:outline-blue-400 focus:bg-blue-[#537FFF]'
        />
        <button className='rounded-full py-4 pl-4 bg-gradient-to-r from-[#1C1C1C] to-[#454444] text-white border-none'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
