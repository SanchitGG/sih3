// import React from "react";

// export default function About() {
//     return (
//         <div className="py-16 bg-white">
//             <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//                 <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//                     <div className="md:5/12 lg:w-5/12">
//                         <img
//                             src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
//                             alt="image"
//                         />
//                     </div>
//                     <div className="md:7/12 lg:w-6/12">
//                         <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//                             React development is carried out by passionate developers
//                         </h2>
//                         <p className="mt-6 text-gray-600">
//                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
//                             accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
//                             aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
//                         </p>
//                         <p className="mt-4 text-gray-600">
//                             Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
//                             Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React from 'react';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Frontend Developer',
    description: 'Expert in building stunning UI components.',
    imgSrc: 'path-to-image.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'Backend Developer',
    description: 'Specializes in scalable backend architecture.',
    imgSrc: 'path-to-image.jpg'
  },
  // Add more teammates as needed
];

const About = () => {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      {/* About Section with Flexbox */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mb-12 space-y-6 lg:space-y-0 lg:space-x-12">
        {/* Left side (text) with added left padding */}
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About Fri-lancer Hub
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Fri-lancer Hub! Our platform connects clients with skilled
            freelancers across various fields. Whether you need web development,
            graphic design, or machine learning expertise, we've got you
            covered.
          </p>
          <p className="text-lg text-gray-700">
            We aim to simplify the process of finding the right talent for your
            projects, while offering freelancers an opportunity to showcase
            their skills and work on exciting projects.
          </p>
        </div>

        {/* Right side (image) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
            alt="image"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 w-64 text-center"
            >
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-700 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
