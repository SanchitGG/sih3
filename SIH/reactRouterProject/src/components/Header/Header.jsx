import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userRoleState } from "../../../../State/state"; // Import the user role state
import logo from "../../assets/Images/frilance logo.png"; // Import the logo

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userRole = useRecoilValue(userRoleState); // Get the user's role from Recoil state
console.log(userRole);
  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

          {/* Hamburger and Logo (Tablet/Mobile View) */}
          <div className="flex items-center lg:hidden w-full justify-between">
            <button
              className="text-gray-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={toggleMenu}
            >
              <div className={`space-y-1 ${isMenuOpen ? "open" : ""}`}>
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-gray-800 transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                ></span>
              </div>
            </button>

            <Link to="/" className="flex items-center">
              <img
                src={logo} // Use the imported local logo
                className="h-16" // Increase size for mobile/tablet view
                alt="Logo"
              />
            </Link>

            <div className="flex items-center">
              <Link
                to="/login"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
              >
                Log in / Sign up
              </Link>
            </div>
          </div>

          <Link to="/" className="hidden lg:flex items-center">
            <img
              src={logo} // Use the imported local logo
              className="mr-10 h-16" // Increase size for desktop view
              alt="Logo"
            />
          </Link>

          <div className="hidden lg:flex justify-center flex-grow">
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  About
                </NavLink>
              </li>

              {/* Conditional Rendering Based on User Role */}
              {userRole === "Freelancer" && (
                <>
                  <li>
                    <NavLink
                      to="/test"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } hover:text-orange-700`
                      }
                    >
                      Take Test
                    </NavLink>
                  </li>
                  
                </>
              )}
              {userRole === "Client" && (
                <li>
                  <NavLink
                    to="/repositoryPage"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:text-orange-700`
                    }
                  >
                    Repository
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="hidden lg:flex items-center lg:order-3">
            <Link
              to="/login"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none ml-10"
            >
              Log in / Sign up
            </Link>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden w-full mt-4">
              <ul className="flex flex-col font-medium space-y-2">
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu} // Close menu on click
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    About
                  </NavLink>
                </li>
                
                {/* Conditional Rendering for Mobile Menu */}
                {userRole === "Freelancer" && (
                  <>
                    <li>
                      <NavLink
                        to="/test"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                        onClick={toggleMenu}
                      >
                        Take Test
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/quiz"
                        className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                        onClick={toggleMenu}
                      >
                        Quiz
                      </NavLink>
                    </li>
                  </>
                )}
                {userRole === "Client" && (
                  <li>
                    <NavLink
                      to="/repositoryPage"
                      className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                      onClick={toggleMenu}
                    >
                      Repository
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    to="/contact"
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
