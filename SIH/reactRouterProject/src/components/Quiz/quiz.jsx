// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import { quizData } from "../questionsData"; // Import the quiz data

// const Quiz = () => {
//   const { topic } = useParams();
//   const questions = quizData[topic] || [];
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);
//   const [score, setScore] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(60); // Start with 60 seconds for each question
//   const [showAnswers, setShowAnswers] = useState(false);

//   // Timer for the quiz
//   useEffect(() => {
//     if (timeLeft > 0 && !showResults) {
//       const timerId = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(timerId);
//     } else if (timeLeft === 0) {
//       handleNextOrSubmit();
//     }
//   }, [timeLeft, showResults]);

//   // Handle selecting an option
//   const handleOptionSelect = (option) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: option,
//     }));
//   };

//   // Handle submission of the quiz
//   const handleSubmit = () => {
//     const calculatedScore = questions.reduce((score, question, index) => {
//       // Compare selected answer with the correct answer, ensuring both are numbers
//       return score + (Number(selectedAnswers[index]) === Number(question.answer) ? 1 : 0);
//     }, 0);
//     setScore(calculatedScore);
//     setShowResults(true);
//   };

//   // Handle going to the next question or submitting if it's the last one
//   const handleNextOrSubmit = () => {
//     if (currentQuestionIndex === questions.length - 1) {
//       handleSubmit();
//     } else {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setTimeLeft(60); // Reset the timer for the next question
//     }
//   };

//   // Toggle showing the correct answers after submission
//   const handleShowAnswers = () => {
//     setShowAnswers(!showAnswers);
//   };

//   return (
//     <div className="quiz-container mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-4">Quiz on {topic}</h1>
//       <div className="timer mb-4 text-lg">Time Left: {timeLeft} seconds</div>

//       {showResults ? (
//         <div>
//           <h2 className="text-xl font-bold">
//             Your Score: {score}/{questions.length}
//           </h2>
//           <button
//             onClick={handleShowAnswers}
//             className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
//           >
//             {showAnswers ? "Hide Answers" : "Show Answers"}
//           </button>
//           {showAnswers && (
//             <div className="answers mt-4">
//               {questions.map((question, index) => (
//                 <div key={index} className="mb-4">
//                   <p>{question.question}</p>
//                   <p>Your Answer: {question.options[selectedAnswers[index]]}</p>
//                   <p>Correct Answer: {question.options[question.answer]}</p>
//                 </div>
//               ))}
//             </div>
//           )}
//           <Link to="/" className="mt-4 block text-blue-500">
//             Back to Topics
//           </Link>
//         </div>
//       ) : (
//         currentQuestionIndex < questions.length && (
//           <div className="question-container mb-4">
//             <h2 className="text-xl mb-2">
//               {questions[currentQuestionIndex].question}
//             </h2>
//             <div className="options flex flex-col">
//               {questions[currentQuestionIndex].options.map((option, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleOptionSelect(index)}
//                   className={`option-button border py-3 px-4 rounded mb-2 text-left ${
//                     selectedAnswers[currentQuestionIndex] === index
//                       ? "bg-blue-500 text-white"
//                       : "bg-white text-black"
//                   }`}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//             <button
//               onClick={handleNextOrSubmit}
//               disabled={selectedAnswers[currentQuestionIndex] === undefined}
//               className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
//             >
//               {currentQuestionIndex === questions.length - 1
//                 ? "Submit Quiz"
//                 : "Next Question"}
//             </button>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default Quiz;
import Groq from "groq-sdk";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { quizData } from "../questionsData"; // Import the quiz data
const apiKey = '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';
const groq = new Groq({
  apiKey,
  dangerouslyAllowBrowser: true, // Enable this option
});
const Quiz = () => {
  const { topic } = useParams();
  const questions = quizData[topic] || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // Start with 60 seconds for each question
  const [showAnswers, setShowAnswers] = useState(false);
  const [showsuggestions, setShowsuggestions] = useState(false);

  // Timer for the quiz
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else if (timeLeft === 0) {
      handleNextOrSubmit();
    }
  }, [timeLeft, showResults]);

  // Handle selecting an option
  const handleOptionSelect = (option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  // Handle submission of the quiz
  const handleSubmit = () => {
    const calculatedScore = questions.reduce((score, question, index) => {
      // Compare selected answer with the correct answer, ensuring both are numbers
      return score + (Number(selectedAnswers[index]) === Number(question.answer) ? 1 : 0);
    }, 0);
    setScore(calculatedScore);
    setShowResults(true);
  };

  // Handle going to the next question or submitting if it's the last one
  const handleNextOrSubmit = () => {
    if (currentQuestionIndex === questions.length - 1) {
      handleSubmit();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTimeLeft(60); // Reset the timer for the next question
    }
  };

  // Toggle showing the correct answers after submission
  const handleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };
  const handleShowsuggestions = () => {
    setShowsuggestions(!showsuggestions);
  }
  const main = async () => {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    return chatCompletion.choices[0]?.message?.content || "";
  };
  
  const getGroqChatCompletion = async () => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `suggest some online courses so i can improve myself on ${topic}.Be concise`,
      },
    ],
    model: "llama3-8b-8192",
  });
}
const YourComponent = () => {
  const [showsuggestions, setShowSuggestions] = useState(false); // Control showing suggestions
  const [suggestionContent, setSuggestionContent] = useState(""); // State to hold suggestion
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true); // Set loading to true
      setError(null); // Reset error state

      try {
        const result = await main(); // Call the main function
        setSuggestionContent(result); // Store the result in state
      } catch (err) {
        setError(err.message); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    if (showsuggestions) {
      fetchSuggestions(); // Fetch suggestions if showsuggestions is true
    }
  }, [showsuggestions]); // Dependency array

  return (
    <div>
      {showsuggestions && (
        <div className="suggestions mt-4">
          {loading && <p>Loading suggestions...</p>} {/* Loading state */}
          {error && <p className="text-red-500">Error: {error}</p>} {/* Error message */}
          {!loading && !error && <p>{suggestionContent}</p>} {/* Render the suggestion content */}
        </div>
      )}
      {/* Your trigger for showing suggestions */}
      <button onClick={() => setShowSuggestions(true)}>Get Suggestions</button>
    </div>
  );
};
  // Auto-submit if the user changes the tab or minimizes the window
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleSubmit(); // Auto-submit the quiz
      }
    };

    // Listen to the visibility change event
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="quiz-container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Quiz on {topic}</h1> <span class="font-semibold text-red-500"> NOTE : If you try to change the tab then the quiz will be auto-submitted</span>
      <div className="timer mb-4 text-lg">Time Left: {timeLeft} seconds</div>

      {showResults ? (
        <div>
          <h2 className="text-xl font-bold">
            Your Score: {score}/{questions.length}
          </h2>
          <button
            onClick={handleShowAnswers}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            {showAnswers ? "Hide Answers" : "Show Answers"}
          </button>
          <br />
          <button
            onClick={handleShowsuggestions}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            {showsuggestions ? "Hide suggestions" : "Show suggestions"}
          </button>
          {showAnswers && (
            <div className="answers mt-4">
              {questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <p>{question.question}</p>
                  <p>Your Answer: {question.options[selectedAnswers[index]]}</p>
                  <p>Correct Answer: {question.options[question.answer]}</p>
                </div>
              ))}
            </div>
          )}
          {showsuggestions && (
            <div className="suggestions mt-4">
             <YourComponent />
              </div>
          )}
          <Link to="/" className="mt-4 block text-blue-500">
            Back to Topics
          </Link>
        </div>
      ) : (
        currentQuestionIndex < questions.length && (
          <div className="question-container mb-4">
            <h2 className="text-xl mb-2">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="options flex flex-col">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`option-button border py-3 px-4 rounded mb-2 text-left ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextOrSubmit}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
            >
              {currentQuestionIndex === questions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Quiz;
