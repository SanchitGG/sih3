import React from 'react';

const RepositoryPage = () => {
  // Data for freelancers
  const freelancers = [
    { name: 'John Doe', github: 'https://github.com/johndoe/project1', cost: '$500' },
    { name: 'Jane Smith', github: 'https://github.com/janesmith/project2', cost: '$750' },
    { name: 'David Lee', github: 'https://github.com/davidlee/project3', cost: '$600' },
    { name: 'Emily Clark', github: 'https://github.com/emilyclark/project4', cost: '$450' },
    { name: 'Michael Scott', github: 'https://github.com/michaelscott/project5', cost: '$800' },
    { name: 'Sara Johnson', github: 'https://github.com/sarajohnson/project6', cost: '$400' },
    { name: 'Kevin Brown', github: 'https://github.com/kevinbrown/project7', cost: '$550' },
    { name: 'Anna Taylor', github: 'https://github.com/annataylor/project8', cost: '$700' },
    { name: 'Chris Evans', github: 'https://github.com/chrisevans/project9', cost: '$650' },
    { name: 'Linda Miller', github: 'https://github.com/lindamiller/project10', cost: '$300' },
  ];

  return (
    <div style={styles.repositoryPage}>
      <h1 style={styles.title}>Freelancer Repositories</h1> {/* Apply the new styles here */}
      <div style={styles.cardContainer}>
        {freelancers.map((freelancer, index) => (
          <div key={index} style={styles.card}>
            <h2>{freelancer.name}</h2>
            <a href={freelancer.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
              Github Link
            </a>
            <p>Cost: {freelancer.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles for the page and card
const styles = {
  repositoryPage: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem', // Increased font size for emphasis
    fontWeight: 'bold', // Bold text
    marginBottom: '30px', // Add space below the title
    color: '#333', // A dark color for better readability
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '250px',
    transition: 'transform 0.2s',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default RepositoryPage;
