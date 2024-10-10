// import React from "react";
// import { Link } from "react-router-dom";
// import Slider from "./Slider"; // Import the Slider component

// // Sample data for freelancers
// const freelancers = [
//   { id: 1, name: "John Doe", category: "Android", score: 85, repo: "Project Repo 1" },
//   { id: 2, name: "Jane Smith", category: "Web Development", score: 90, repo: "Project Repo 2" },
//   { id: 3, name: "Alice Brown", category: "Graphics", score: 95, repo: "Project Repo 3" },
//   // Add more freelancers as needed
// ];

// const Home = () => {
//   return (
//     <div className="home-container mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Freelancers</h1>

//       {/* Slider for categories */}
//       <Slider />

//       {/* List of freelancers */}
//       <h2 className="text-2xl font-semibold mb-4">Available Freelancers</h2>
//       <div className="freelancer-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {freelancers.map((freelancer) => (
//           <Link
//             to={`/freelancer/${freelancer.id}`}
//             key={freelancer.id}
//             className="freelancer-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <h3 className="text-xl font-bold">{freelancer.name}</h3>
//             <p className="text-md">Category: {freelancer.category}</p>
//             <p className="text-md">Quiz Score: {freelancer.score}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategorySlider from "./CategorySlider"; // Import the updated Slider component

// Sample data for freelancers
const freelancers = [
  {
    id: 1,
    people: [
      { name: "John Doe", role: "Lead Developer", experience: 5, email: "john@example.com" },
      { name: "Jane Doe", role: "Junior Developer", experience: 2, email: "jane@example.com" },
      { name: "Mark Smith", role: "Project Manager", experience: 7, email: "mark@example.com" }
    ],
    category: "Machine Learning",
    score: 85,
    repo: "Project Repo 1"
  },
  {
    id: 2,
    people: [
      { name: "Alex Turner", role: "Lead Developer", experience: 6, email: "alex@example.com" },
      { name: "Sara Connor", role: "Junior Developer", experience: 3, email: "sara@example.com" },
      { name: "Mike Lee", role: "Project Manager", experience: 8, email: "mike@example.com" }
    ],
    category: "MERN",
    score: 90,
    repo: "Project Repo 2"
  },
  {
    id: 3,
    people: [
      { name: "Alice Brown", role: "Graphic Designer", experience: 5, email: "alice@example.com" },
      { name: "Bob Green", role: "Junior Designer", experience: 2, email: "bob@example.com" },
      { name: "Charlie White", role: "Project Lead", experience: 7, email: "charlie@example.com" }
    ],
    category: "Web Development",
    score: 95,
    repo: "Project Repo 3"
  },
  {
    id: 4,
    people: [
      { name: "Frank Jones", role: "Software Engineer", experience: 6, email: "frank@example.com" },
      { name: "Grace Lewis", role: "Backend Developer", experience: 3, email: "grace@example.com" },
      { name: "Henry Adams", role: "Frontend Developer", experience: 4, email: "henry@example.com" },
      { name: "Isabella Ford", role: "Full Stack Developer", experience: 5, email: "isabella@example.com" },
      { name: "Jack Ryan", role: "DevOps Engineer", experience: 7, email: "jack@example.com" }
    ],
    category: "JavaScript",
    score: 95,
    repo: "Project Repo 3"
  },
  {
    id: 5,
    people: [
      { name: "Katherine Lee", role: "Data Scientist", experience: 5, email: "katherine@example.com" },
      { name: "Luke Turner", role: "ML Engineer", experience: 4, email: "luke@example.com" },
      { name: "Mia Clark", role: "Data Analyst", experience: 3, email: "mia@example.com" },
      { name: "Nathan Scott", role: "AI Specialist", experience: 6, email: "nathan@example.com" },
      { name: "Olivia Morgan", role: "Research Scientist", experience: 7, email: "olivia@example.com" }
    ],
    category: "Python",
    score: 95,
    repo: "Project Repo 3"
  },
  {
    id: 6,
    people: [
      { name: "Peter Thompson", role: "Product Manager", experience: 8, email: "peter@example.com" },
      { name: "Quinn Taylor", role: "Business Analyst", experience: 4, email: "quinn@example.com" },
      { name: "Rachel Wilson", role: "Scrum Master", experience: 5, email: "rachel@example.com" },
      { name: "Samuel Carter", role: "Project Manager", experience: 7, email: "samuel@example.com" },
      { name: "Tina Rogers", role: "Agile Coach", experience: 6, email: "tina@example.com" }],
    category: "Rust",
    score: 95,
    repo: "Project Repo 3"
  },
  {
    id: 7,
    people: [
      { name: "Uma Patel", role: "Marketing Manager", experience: 5, email: "uma@example.com" },
      { name: "Victor Harris", role: "Content Strategist", experience: 3, email: "victor@example.com" },
      { name: "Wendy Cooper", role: "SEO Specialist", experience: 4, email: "wendy@example.com" },
      { name: "Xavier Bennett", role: "Social Media Manager", experience: 2, email: "xavier@example.com" },
      { name: "Yara Diaz", role: "Brand Manager", experience: 6, email: "yara@example.com" }
    ],
    category: "Ruby",
    score: 95,
    repo: "Project Repo 3"
  },
  {
    id: 8,
    people: [
      { name: "Zachary Woods", role: "Content Writer", experience: 3, email: "zachary@example.com" },
      { name: "Amelia Brooks", role: "Copywriter", experience: 4, email: "amelia@example.com" },
      { name: "Brandon Gray", role: "Editor", experience: 6, email: "brandon@example.com" },
      { name: "Clara Evans", role: "Creative Director", experience: 7, email: "clara@example.com" },
      { name: "Daniel Hill", role: "Digital Marketer", experience: 5, email: "daniel@example.com" }
    ],
    category: "Django",
    score: 95,
    repo: "Project Repo 3"
  },
  
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter freelancers based on the selected category
  const filteredFreelancers = freelancers.filter(freelancer => freelancer.category === selectedCategory);

  return (
    <div className="home-container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Freelancers</h1>

      {/* Slider for categories */}
      <CategorySlider onCategoryClick={handleCategoryClick} />

      {/* List of freelancers based on selected category */}
      {selectedCategory && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Available Freelancers in {selectedCategory}
          </h2>
          <div className="freelancer-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFreelancers.length > 0 ? (
              filteredFreelancers[0].people.map((person, index) => (
                <div
                  key={index}
                  className="freelancer-card p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold">{person.name}</h3>
                  <p className="text-md">Role: {person.role}</p>
                  <p className="text-md">Experience: {person.experience} years</p>
                  <p className="text-md">Email: {person.email}</p>
                </div>
              ))
            ) : (
              <p>No freelancers available in this category.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
