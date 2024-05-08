const StaffDeployment = () => {
  return (
    <div className='cursor-pointer bottom-10 left-[150px] staff-deployment  absolute flex gap-4 items-center py-[16px] pr-[32px] pl-[16px] bg-white rounded-[111.54px] shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out'>
      <div className='bg-[#DDEFE0]/40 px-3 py-3 rounded-full'>
        <img src='../staff-deploy.png' alt='rocket' width={30} className='' />
      </div>

      <div className='flex flex-col gap-1'>
        <p className='manrope-semibold text-[24px] leading-[32.78px] text-[#1C1C1C]'>
          10 DAYS
        </p>
        <p className='manrope-semibold text-[16px] leading-[20.8px] text-[#828282]'>
          Staff Deployment
        </p>
      </div>
    </div>
  );
};

export default StaffDeployment;
