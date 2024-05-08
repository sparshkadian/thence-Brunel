import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FormSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  }, []);

  return (
    <div className='px-2 max-w-5xl mx-auto mt-20 flex flex-col gap-5 items-center'>
      <img
        src='../form-success.png'
        alt='tick'
        width={80}
        height={80}
        className='object-cover'
      />

      <h2 className='h-[28px] covered-by-your-grace-regular text-[#2DA950] text-[36px] leading-[39.6px]'>
        Success Submitted
      </h2>

      <h3 className='h-[67px] w-[423px] manrope-semibold text-[56px] leading-[67.2px]'>
        Congratulations
      </h3>

      <p className='h-[105px] max-w-[718px] manrope-medium text-[#727272] text-[27px] leading-[35.1px] text-center'>
        Your request has been successfully submitted to us. We will validate
        your information and reach out to your shortly with updates
      </p>

      <p className='h-[26px] max-w-[718px] manrope-normal text-[#727272] text-[20px] fixed bottom-10'>
        Redirecting you to Homepage in{' '}
        <span className=' text-black manrope-medium text-[20px] leading-[26px]'>
          5 Seconds
        </span>
      </p>
    </div>
  );
};

export default FormSuccess;
