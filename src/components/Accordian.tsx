import { questionsArray } from '../constants';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordian = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(3);

  const selectQuestion = (itemId: number): boolean => {
    if (selectedQuestion !== itemId) {
      setSelectedQuestion(itemId);
      return true;
    } else {
      setSelectedQuestion(null);
      return false;
    }
  };

  return (
    <div className='sm:p-2'>
      {questionsArray.map((item) => (
        <div
          key={item.id}
          className='accordian-questions flex flex-col gap-5 mt-5 border-b-2 border-b-gray-300 pb-5'
        >
          <div className='flex items-center justify-between gap-20'>
            <p className='manrope-semibold sm:text-[20px] leading-[28px] text-[#1C1C1C]'>
              {item.question}
            </p>
            <img
              onClick={() => {
                selectQuestion(item.id);
              }}
              src={
                selectedQuestion === item.id
                  ? '../accordian-minus.png'
                  : 'accordian-plus.png'
              }
              alt='open'
              className='cursor-pointer w-[12px] sm:w-[17px]'
            />
          </div>
          <AnimatePresence>
            {selectedQuestion === item.id && (
              <motion.p
                key={item.id}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='manrope-semibold font-normal text-[15px] text-[#617275] leading-[24px] overflow-hidden'
              >
                {item.answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
