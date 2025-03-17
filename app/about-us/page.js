'use client'
import { useState } from 'react'
import { 
  Users, 
  Target, 
  Award, 
  Briefcase, 
  BookOpen, 
  Rocket 
} from 'lucide-react'

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('mission')

  const tabContent = {
    mission: {
      icon: <Target className="mr-2 text-teal-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg">
            Shuggest AI is designed to transform interview preparation with personalized, AI-driven coaching tailored to your career goals.
          </p>
          <p className="text-base md:text-lg">
            Our mission is to bridge the gap between preparation and success, helping users gain confidence and excel in their interviews.
          </p>
        </div>
      )
    },
    story: {
      icon: <BookOpen className="mr-2 text-teal-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg">
            The idea for Shuggest AI emerged from real challenges faced during interview preparation. My goal was to develop a platform that makes the process easier and boosts confidence.
          </p>
          <p className="text-base md:text-lg">
            This journey reflects the power of innovation and determination, resulting in a tool that empowers individuals in their career growth.
          </p>
        </div>
      )
    },
    approach: {
      icon: <Rocket className="mr-2 text-teal-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-base md:text-lg">
            Shuggest AI utilizes advanced AI algorithms to create dynamic, tailored interview questions based on your experience and career aspirations.
          </p>
          <p className="text-base md:text-lg">
            With real-time feedback and analysis, the platform delivers actionable insights, helping users refine their skills with every practice session.
          </p>
        </div>
      )
    }
  }

  const coreValues = [
    {
      icon: <Award className="w-12 h-12 text-teal-600 mb-4" />,
      title: "Continuous Learning",
      description: "Always striving to improve and provide better tools for growth."
    },
    {
      icon: <Users className="w-12 h-12 text-teal-600 mb-4" />,
      title: "Empowerment",
      description: "Supporting individuals in building confidence and achieving professional success."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-teal-600 mb-4" />,
      title: "Excellence",
      description: "Delivering high-quality, impactful features to simplify interview preparation."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900">
            About Shuggest AI
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Helping professionals master interviews with AI-driven, personalized coaching.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row border-b">
            {Object.keys(tabContent).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full sm:flex-1 py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center 
                  ${activeTab === tab 
                    ? 'bg-teal-50 text-teal-700 border-b-2 border-teal-600' 
                    : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {tabContent[tab].icon}
                <span className="hidden sm:inline">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
              </button>
            ))}
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            {tabContent[activeTab].content}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="text-center bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage