import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import RepositoryPage from './components/RepositoryPage/RepositoryPage.jsx';
import Test from './components/Test/Test.jsx';
import Quiz from './components/Quiz/quiz.jsx'; // Assuming you have a Quiz component
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthForm from './components/AuthForm.jsx'; // Adjust this as per your directory structure

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="repositoryPage" element={<RepositoryPage />} />
      <Route path="test" element={<Test />} />
      <Route path="quiz/:topic" element={<Quiz />} /> {/* Route for quiz topics */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="user/:id" element={<User />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
