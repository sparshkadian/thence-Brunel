import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormDate] = useState({ userName: '', email: '' });
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { userName, email } = formData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate((prevValue) => ({
      ...prevValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userName.trim() || !email.trim()) {
      setBtnDisabled(true);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setBtnDisabled(true);
      setEmailError(true);
      return;
    }

    setBtnDisabled(false);
    setEmailError(false);
  };

  return (
    <div className='max-w-4xl mx-auto mt-20 flex flex-col items-center gap-4'>
      <h2 className='covered-by-your-grace-regular text-[#2DA950] text-[36px] leading-[39.6px]'>
        Registeration Form
      </h2>

      <div className='manrope-semibold flex flex-col gap-1 items-center text-[56px] leading-[67.2px]'>
        <p>Start your success</p>
        <p>Journey here!</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='mt-5 flex flex-col gap-[24px] w-2/5'
      >
        <input
          type='text'
          id='userName'
          onChange={handleInputChange}
          value={userName}
          placeholder='Enter your name'
          className='rounded-full py-4 pl-4 bg-[#EFEFEF] border-none focus:outline-none  focus:outline-[#537FFF] focus:bg-blue-100/50'
        />
        <input
          type='email'
          id='email'
          onChange={handleInputChange}
          value={email}
          placeholder='Enter your email'
          className='rounded-full py-4 pl-4 bg-[#EFEFEF] border-none focus:outline-none focus:outline-blue-400 focus:bg-blue-100/50'
        />

        {emailError && (
          <div className='manrope-semibold font-medium text-[16px] leading-[21.86px] flex gap-2 items-center'>
            <img src='../email-error.png' alt='error' width={16} />
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
              : 'bg-gradient-to-r from-[#1C1C1C] to-[#454444] text-white border-none'
          } manrope-semibold text-[18px] leading-[24.59px] rounded-full py-4 pl-4`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
