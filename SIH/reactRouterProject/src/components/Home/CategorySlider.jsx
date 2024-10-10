// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import ml from '../../assets/Images/ml.jpg';
// import mern from '../../assets/Images/mern.jpg';
// import web from '../../assets/Images/web.jpg';
// import js from '../../assets/Images/js.jpg';
// import python from '../../assets/Images/python.jpg';
// import rust from '../../assets/Images/rust.jpg';
// import ruby from '../../assets/Images/ruby.jpg';
// import django from '../../assets/Images/django.jpg';


// // Sample data for categories corresponding to topics
// const categories = [
//   { name: "Machine Learning", image: ml },
//   { name: "MERN", image: mern },
//   { name: "Web Development", image: web },
//   { name: "JavaScript", image: js },
//   { name: "Python", image: python },
//   { name: "Rust", image: rust },
//   { name: "Ruby", image: ruby },
//   { name: "Django", image: django },
// ];

// // Arrow Components
// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black rounded-full p-2 shadow-lg"
//     onClick={onClick}
//   >
//     &#10095; {/* Right arrow symbol */}
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black rounded-full p-2 shadow-lg"
//     onClick={onClick}
//   >
//     &#10094; {/* Left arrow symbol */}
//   </div>
// );

// const CategorySlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <Slider {...settings}>
//       {categories.map((category, index) => (
//         <div key={index} className="p-4">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img 
//               src={category.image} 
//               alt={category.name} 
//               className="w-full h-72 object-cover" 
//             />
//             <div className="p-4 text-center">
//               <h3 className="text-lg font-semibold">{category.name}</h3>
//             </div>
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default CategorySlider;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ml from '../../assets/Images/ml.jpg';
import mern from '../../assets/Images/mern.jpg';
import web from '../../assets/Images/web.jpg';
import js from '../../assets/Images/js.jpg';
import python from '../../assets/Images/python.jpg';
import rust from '../../assets/Images/rust.jpg';
import ruby from '../../assets/Images/ruby.jpg';
import django from '../../assets/Images/django.jpg';

// Sample data for categories corresponding to topics
const categories = [
  { name: "Machine Learning", image: ml },
  { name: "MERN", image: mern },
  { name: "Web Development", image: web },
  { name: "JavaScript", image: js },
  { name: "Python", image: python },
  { name: "Rust", image: rust },
  { name: "Ruby", image: ruby },
  { name: "Django", image: django },
];

// Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black rounded-full p-2 shadow-lg"
    onClick={onClick}
  >
    &#10095; {/* Right arrow symbol */}
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black rounded-full p-2 shadow-lg"
    onClick={onClick}
  >
    &#10094; {/* Left arrow symbol */}
  </div>
);

const CategorySlider = ({ onCategoryClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {categories.map((category, index) => (
        <div key={index} className="p-4">
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => onCategoryClick(category.name)} // Handle click
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CategorySlider;
