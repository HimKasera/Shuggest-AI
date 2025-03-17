"use client"
import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionsSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  console.log("🚀 ~ file: QuestionsSection.jsx:4 ~ QuestionsSection ~ mockInterviewQuestion:", mockInterviewQuestion);

  const textToSpeach = (text) => {
    if ('speechSynthesis' in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text to speech");
    }
  };

  return mockInterviewQuestion && (
    <div className='p-5 border rounded-lg my-10 bg-gray-50 shadow-md'>
      {/* Question Navigation */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {mockInterviewQuestion.map((question, index) => (
          <h2
            key={index}
            className={`p-2 bg-gray-100 rounded-full text-xs md:text-sm text-center cursor-pointer hover:bg-teal-100 transition-colors ${
              activeQuestionIndex === index && 'bg-teal-600 text-white'
            }`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>

      {/* Current Question */}
      <h2 className='my-5 text-md md:text-lg font-semibold text-gray-900'>
        {mockInterviewQuestion[activeQuestionIndex]?.question}
      </h2>
      <Volume2
        className='cursor-pointer text-teal-600 hover:text-teal-800 transition-colors'
        onClick={() => textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)}
      />

      {/* Note Section */}
      <div className='border rounded-lg p-5 bg-teal-50 mt-10 shadow-sm'>
        <h2 className='flex gap-2 items-center text-teal-700 font-semibold'>
          <Lightbulb className='w-5 h-5' />
          <strong>Note:</strong>
        </h2>
        <h2 className='text-sm text-gray-700 my-2'>
          Enable Video Web Cam and Microphone to Start your AI Generated Mock Interview. It has 5 questions which you can answer, and at the end, you will get a report based on your answers. NOTE: We never record your video; webcam access can be disabled at any time if you want.
        </h2>
      </div>
    </div>
  );
};

export default QuestionsSection;