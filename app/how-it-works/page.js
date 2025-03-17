"use client";

import React from "react";
import { Bot, UserCheck, Settings, Play, Send, ChartBar, Repeat } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: <UserCheck size={48} className="text-teal-600" />,
      title: "Sign Up or Log In",
      description: "Create an account or log in with Clerk to build a personalized profile, track your interview progress, and store preferences."
    },
    {
      icon: <Settings size={48} className="text-teal-600" />,
      title: "Choose Your Interview Type",
      description: "Pick from technical, behavioral, or mixed interviews. Customize topics, difficulty, and duration to align with your career goals."
    },
    {
      icon: <Play size={48} className="text-teal-600" />,
      title: "Start Your Mock Interview",
      description: "AI-driven questions, powered by Gemini, keep you engaged with dynamic and contextually relevant prompts, one at a time."
    },
    {
      icon: <Send size={48} className="text-teal-600" />,
      title: "Submit Your Responses",
      description: "Answer using text or multiple-choice options. Our user-friendly interface ensures smooth interaction and real-time tracking."
    },
    {
      icon: <ChartBar size={48} className="text-teal-600" />,
      title: "Receive Instant Feedback",
      description: "Get AI-generated insights on your performance, highlighting strengths, improvement areas, and a detailed scoring breakdown."
    },
    {
      icon: <Repeat size={48} className="text-teal-600" />,
      title: "Keep Practicing",
      description: "Review past interviews, monitor your growth, and refine your skills with unlimited practice sessions and adaptive challenges."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <Bot className="inline-block mr-3 text-teal-600" size={48} />
          Shuggestor AI: Your Interview Preparation Companion
        </h1>
        <p className="text-xl text-gray-600">
          Master your interviews with AI-powered practice and personalized insights
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              {step.icon}
              <h2 className="ml-4 text-2xl font-semibold text-gray-800">
                Step {index + 1}: {step.title}
              </h2>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="text-center mt-12">
        <a
          href="/dashboard"
          className="bg-teal-600 text-white px-8 py-3 rounded-full text-lg hover:bg-teal-700 transition-colors"
        >
          Start Your Interview Journey
        </a>
      </div>
    </div>
  );
};

export default HowItWorksPage;