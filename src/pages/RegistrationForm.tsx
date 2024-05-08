import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({ userName: '', email: '' });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const { userName, email } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
    validateForm(e.target.id, e.target.value);
  };

  const validateForm = (fieldId: string, fieldValue: string) => {
    if (fieldId === 'userName') {
      setBtnDisabled(!fieldValue.trim() || !email.trim());
    } else if (fieldId === 'email') {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const isValidEmail = emailRegex.test(fieldValue);
      setBtnDisabled(!userName.trim() || !isValidEmail);
      setEmailError(!isValidEmail);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!btnDisabled) {
      navigate('/register/success');
    }
  };

  return (
    <div className='max-w-[588px] h-[538.22px] mx-auto relative mt-20 flex flex-col items-center gap-4'>
      <h2 className='h-[28px] covered-by-your-grace-regular text-[#2DA950] text-[36px] leading-[39.6px]'>
        Registeration Form
      </h2>

      <div className='h-[134px] w-[588px] text-center manrope font-semibold flex flex-col items-center text-[50px] sm:text-[56px] leading-[67.2px] text-[#1C1C1C]'>
        <p>Start your success</p>
        <p>Journey here!</p>
      </div>

      <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-[24px]'>
        <input
          type='text'
          id='userName'
          onChange={handleInputChange}
          value={userName}
          placeholder='Enter your name'
          className='h-[75px] w-[417px] rounded-[64px] py-[24px] px-[36px] bg-[#EFEFEF] border focus:outline-none  focus:outline-[#537FF1] focus:bg-blue-100/50
          placeholder:manrope-medium placeholder:text-[20px] placeholder:text-[#827A7A] placeholder:leading-[27.32px]
          manrope-medium text-[20px] leading-[27.32px]'
        />
        <input
          type='email'
          id='email'
          onChange={handleInputChange}
          value={email}
          placeholder='Enter your email'
          className='h-[75px] w-[417px] rounded-[64px] py-[24px] px-[36px] bg-[#EFEFEF] border focus:outline-none  focus:outline-[#537FF1] focus:bg-blue-100/50
            placeholder:manrope-medium placeholder:text-[20px] placeholder:text-[#827A7A] placeholder:leading-[27.32px]
            manrope-medium text-[20px] leading-[27.32px]'
        />

        {emailError && (
          <div className='manrope-medium text-[16px] leading-[21.86px] flex gap-2 items-center'>
            <img
              src='../email-error.png'
              alt='error'
              width={20}
              height={20}
              className='object-cover'
            />
            <p className='text-[#FF0808]'>Enter a Valid email address</p>
          </div>
        )}

        <button
          onClick={() => {
            navigate('/register/success');
          }}
          disabled={btnDisabled}
          className={`${
            btnDisabled
              ? 'bg-[#C9C9C9] text-white'
              : 'bg-[#1C1C1C] hover:bg-[#454444] transition-all ease-in-out duration-300 text-white border-none'
          } h-[77.22px] w-[417px] manrope-semibold text-[18px] leading-[24.59px] rounded-full py-4 pl-4`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
