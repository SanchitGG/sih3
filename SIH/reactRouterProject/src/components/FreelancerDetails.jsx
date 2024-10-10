import React from "react";

// Sample freelancer data
const freelancers = [
  {
    id: 1,
    name: "John Doe",
    category: "Android",
    projects: [
      { title: "Project A", repo: "https://github.com/johndoe/project-a", cost: "$500", score: 85 },
      { title: "Project B", repo: "https://github.com/johndoe/project-b", cost: "$300", score: 80 },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    category: "Web Development",
    projects: [
      { title: "Project C", repo: "https://github.com/janesmith/project-c", cost: "$700", score: 90 },
      { title: "Project D", repo: "https://github.com/janesmith/project-d", cost: "$400", score: 88 },
    ],
  },
  {
    id: 3,
    name: "Alice Brown",
    category: "Graphics",
    projects: [
      { title: "Project E", repo: "https://github.com/alicebrown/project-e", cost: "$600", score: 95 },
    ],
  },
  // Add more freelancers as needed
];

const FreelancerDetails = ({ category }) => {
  const filteredFreelancers = freelancers.filter(freelancer => freelancer.category === category);

  return (
    <div className="freelancer-details-container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{category} Freelancers</h1>

      {filteredFreelancers.length === 0 ? (
        <p>No freelancers available for this category.</p>
      ) : (
        filteredFreelancers.map((freelancer) => (
          <div key={freelancer.id} className="freelancer-card bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-2xl font-semibold">{freelancer.name}</h2>
            <h3 className="text-lg font-medium">Projects:</h3>
            <ul className="list-disc list-inside">
              {freelancer.projects.map((project, index) => (
                <li key={index} className="mb-2">
                  <span className="font-bold">{project.title}</span> - 
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> View Repo</a> - 
                  Cost: {project.cost}, Quiz Score: {project.score}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default FreelancerDetails;
