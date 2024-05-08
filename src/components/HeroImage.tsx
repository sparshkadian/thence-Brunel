import TimeReduction from './SuccessStoryImage/TimeReduction';
import Expenses from './SuccessStoryImage/Expenses';
import StaffDeployment from './SuccessStoryImage/StaffDeployment';

const HeroImage = () => {
  return (
    <div className='flex items-center relative'>
      <img
        src='../hero-img.png'
        alt='heroImage'
        className='ml-[150px] max-w-[65%] object-contain rounded-[50px]'
      />

      <TimeReduction />
      <StaffDeployment />
      <Expenses />
    </div>
  );
};

export default HeroImage;
