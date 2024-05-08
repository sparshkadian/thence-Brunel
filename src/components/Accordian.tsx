import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questionsArray } from '../constants';

interface QuestionItem {
  id: number;
  question: string;
  answer: string;
}

const Accordion = () => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(
    null
  );

  const handleQuestionClick = (questionId: number) => {
    setExpandedQuestionId((prevId) =>
      prevId === questionId ? null : questionId
    );
  };

  return (
    <div className='w-full md:w-3/4 ml-auto sm:p-2 h-[578px] mr-20'>
      {questionsArray.map((item: QuestionItem) => (
        <div
          key={item.id}
          className='accordion-question mt-5 border-b-2 border-b-gray-300 pb-5'
        >
          <div
            className='flex items-center justify-between gap-20 cursor-pointer'
            onClick={() => handleQuestionClick(item.id)}
          >
            <p className='manrope-semibold sm:text-[20px] leading-[28px] text-[#1C1C1C]'>
              {item.question}
            </p>
            <img
              src={
                expandedQuestionId === item.id
                  ? '../accordian-minus.png'
                  : 'accordian-plus.png'
              }
              alt='open'
              className='w-[12px] sm:w-[17px]'
            />
          </div>
          <AnimatePresence>
            {expandedQuestionId === item.id && (
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

export default Accordion;
