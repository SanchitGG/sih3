// Test.jsx

import React from "react";
import { Link } from "react-router-dom";
// import { quizData } from "../questionsData"; // Updated import to use questionData.jsx

const topics = [
  "ML", "MERN", "WebDevelopment", "JavaScript", "Python", 
  "Rust", "Ruby", "Django", "OOP", "DeepLearning"
];

const TopicBlocks = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <Link to={`/quiz/${topic}`} key={index}>
            <div
              className="relative border border-gradient-to-r from-[#c2410c] to-[#f87171] text-white font-bold p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out group"
            >
              <h2 className="text-xl mb-2 tracking-wide text-center text-[#c2410c] group-hover:text-[#f87171]">{topic}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Test() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <TopicBlocks />
    </div>
  );
}
