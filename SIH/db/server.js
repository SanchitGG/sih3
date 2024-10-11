const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(cors()); // Enable CORS to allow requests from your React app
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data (like FormData)
app.use(express.json()); // Parse JSON data

// Endpoint to get all clients
app.get('/clients', async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      include: {
        projects: true, // Include projects related to each client
      },
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

// Endpoint to get all projects
app.get('/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        freelancers: true, // Include freelancers related to each project
      },
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});
app.post('/signup', async (req, res) => {
  const { email, password, role } = req.body;
 console.log(req.body);
  try {
    let existingUser;

    // Check if the email already exists based on the role
    if (role === 'F') {
      // Check in the freelancers table
      existingUser = await prisma.freelancer.findUnique({
        where: { email: email },
      });
    } else if (role === 'C') {
      // Check in the clients table
      existingUser = await prisma.client.findUnique({
        where: { email: email },
      });
    } else {
      return res.status(400).json({ role: req.body.role });

    }

    // If the user already exists
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Create a new user in the appropriate table
    let newUser;
    if (role === 'F') {
      newUser = await prisma.freelancer.create({
        data: {
          email,
          password, // Make sure to hash the password before storing it
          // Add additional fields specific to freelancers if needed
        },
      });
    } else if (role === 'C') {
      newUser = await prisma.client.create({
        data: {
          email,
          password, // Make sure to hash the password before storing it
          // Add additional fields specific to clients if needed
        },
      });
    }

    res.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;

    // Check the user's role to determine which table to query
    if (role === 'C') {
      // Look for the user in the clients table
      user = await prisma.client.findUnique({
        where: { email: email },
      });
    } else if (role === 'F') {
      // Look for the user in the freelancers table
      user = await prisma.freelancer.findUnique({
        where: { email: email },
      });
    } else {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Check if the user exists and the password matches
    if (user && user.password === password) {  // Direct comparison, not secure
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// Start the server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
