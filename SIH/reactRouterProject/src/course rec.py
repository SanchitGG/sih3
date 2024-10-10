import pandas as pd

import pandas as pd

# Dataset with course titles and course links
data = {
    'Course Title': [
        # Rust
        'The Complete Rust Programming Course for Beginners',
        'Rust Programming: The Complete Guide',
        'Rust Programming For Beginners',
        'Mastering Rust Programming - The Complete Guide',
        'Rust Crash Course | The Complete Guide',

        # Ruby
        'The Complete Ruby on Rails Developer Course',
        'Learn Ruby Programming by Doing',
        'Ruby on Rails 6 Complete Bootcamp',
        'Ruby Programming for Beginners',
        'The Complete Ruby Programming Bootcamp',

        # Django
        'Python and Django Full Stack Web Developer Bootcamp',
        'Django 3 - Full Stack Websites with Python Web Development',
        'Build a Backend REST API with Python & Django - Advanced',
        'Django for Everybody',
        'Django for Beginners',

        # OOP (Object-Oriented Programming)
        'Master Object-Oriented Programming in Java',
        'OOP in Python: Object Oriented Programming for Beginners',
        'Object-Oriented Programming with Python and Java',
        'C++: Object-Oriented Programming & Data Structures',
        'Java Object Oriented Programming Simplified',

        # Deep Learning
        'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
        'Deep Learning Specialization by Andrew Ng',
        'TensorFlow Developer Certificate in 2021: Zero to Mastery',
        'Complete Guide to TensorFlow for Deep Learning with Python',
        'Deep Learning with PyTorch for Beginners'
    ],
    'Course Link': [
        # Rust Links
        'https://www.udemy.com/course/rust-programming-for-beginners/',
        'https://www.udemy.com/course/rust-programming-the-complete-guide/',
        'https://www.udemy.com/course/rust-for-beginners/',
        'https://www.udemy.com/course/mastering-rust-programming-the-complete-guide/',
        'https://www.udemy.com/course/rust-crash-course-the-complete-guide/',
        
        # Ruby Links
        'https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/',
        'https://www.udemy.com/course/learn-ruby-programming-by-doing/',
        'https://www.udemy.com/course/ruby-on-rails-6-complete-bootcamp/',
        'https://www.udemy.com/course/ruby-programming-for-beginners/',
        'https://www.udemy.com/course/the-complete-ruby-programming-bootcamp/',
        
        # Django Links
        'https://www.udemy.com/course/python-and-django-full-stack-web-developer-bootcamp/',
        'https://www.udemy.com/course/django3-full-stack-websites-python/',
        'https://www.udemy.com/course/build-a-backend-rest-api-with-python-django-advanced/',
        'https://www.udemy.com/course/django-for-everybody/',
        'https://www.udemy.com/course/django-for-beginners/',
        
        # OOP Links
        'https://www.udemy.com/course/master-object-oriented-programming-in-java/',
        'https://www.udemy.com/course/oop-python-object-oriented-programming-for-beginners/',
        'https://www.udemy.com/course/object-oriented-programming-with-python-and-java/',
        'https://www.udemy.com/course/c-object-oriented-programming-data-structures/',
        'https://www.udemy.com/course/java-object-oriented-programming-simplified/',
        
        # Deep Learning Links
        'https://www.udemy.com/course/deeplearning/',
        'https://www.udemy.com/course/deep-learning-specialization-andrew-ng/',
        'https://www.udemy.com/course/tensorflow-developer-certificate-zero-to-mastery/',
        'https://www.udemy.com/course/complete-guide-to-tensorflow-for-deep-learning-with-python/',
        'https://www.udemy.com/course/deep-learning-with-pytorch-for-beginners/'
    ]
}

# Convert the data to a DataFrame
df1 = pd.DataFrame(data)


# Dataset with course titles and course links
data = {
    'Course Title': [
        # Machine Learning
        'Machine Learning A-Z™: Hands-On Python & R In Data Science',
        'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
        'Machine Learning, Data Science and Deep Learning with Python',
        'Python for Data Science and Machine Learning Bootcamp',
        'Machine Learning with Python: A Practical Introduction',

        # MERN Stack
        'MERN Stack Front To Back: Full Stack React, Redux & Node.js',
        'React, NodeJS, Express & MongoDB - The MERN Fullstack Guide',
        'MERN eCommerce From Scratch',
        'MERN Stack Master Course – Building Your Own Instagram',
        'The Complete MERN Stack Developer Course',

        # Web Development
        'The Web Developer Bootcamp 2021',
        'The Complete Web Developer Course 2.0',
        'Modern Web Development From Zero to Advanced',
        'Full Stack Web Development Bootcamp',
        'Become a Certified Web Developer 2021',

        # JavaScript
        'JavaScript - The Complete Guide 2021 (Beginner + Advanced)',
        'The Modern JavaScript Bootcamp (2021)',
        'JavaScript: Understanding the Weird Parts',
        'JavaScript for Beginners - The Complete Guide 2021',
        'ES6 JavaScript: The Complete Developer’s Guide',

        # Python
        'Complete Python Bootcamp 2021: Go from Zero to Hero in Python 3',
        'Python for Data Science and Machine Learning Bootcamp',
        'Automate the Boring Stuff with Python Programming',
        'Python Programming Masterclass',
        'Python for Everybody'
    ],
    'Course Link': [
        # Machine Learning Links
        'https://www.udemy.com/course/machinelearning/',
        'https://www.udemy.com/course/deeplearning/',
        'https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/',
        'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
        'https://www.udemy.com/course/machine-learning-with-python/',
        
        # MERN Stack Links
        'https://www.udemy.com/course/mern-stack-front-to-back/',
        'https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/',
        'https://www.udemy.com/course/mern-ecommerce/',
        'https://www.udemy.com/course/mern-stack-master-course-building-your-own-instagram/',
        'https://www.udemy.com/course/the-complete-mern-stack-developer-course/',
        
        # Web Development Links
        'https://www.udemy.com/course/the-web-developer-bootcamp/',
        'https://www.udemy.com/course/the-complete-web-developer-course-2/',
        'https://www.udemy.com/course/modern-web-development-from-zero-to-advanced/',
        'https://www.udemy.com/course/full-stack-web-development-bootcamp/',
        'https://www.udemy.com/course/become-a-certified-web-developer/',
        
        # JavaScript Links
        'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
        'https://www.udemy.com/course/javascript-bootcamp-2021/',
        'https://www.udemy.com/course/understand-javascript/',
        'https://www.udemy.com/course/javascript-for-beginners-the-complete-guide-2021/',
        'https://www.udemy.com/course/es6-javascript-the-complete-developers-guide/',
        
        # Python Links
        'https://www.udemy.com/course/complete-python-bootcamp/',
        'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
        'https://www.udemy.com/course/automate/',
        'https://www.udemy.com/course/python-programming-masterclass/',
        'https://www.udemy.com/course/python-for-everybody/'
    ]
}

# Convert the data to a DataFrame
df2 = pd.DataFrame(data)

df = pd.concat([df1, df2], ignore_index=True)

def fetch_courses_by_keyword(df, keyword):
    # Filter the DataFrame based on the keyword
    filtered_courses = df[df['Course Title'].str.contains(keyword, case=False, na=False)]
    
    # Format the output without index
    formatted_output = filtered_courses.apply(lambda row: f"{row['Course Title']}  {row['Course Link']}", axis=1)
    
    return formatted_output

# Example: Fetch courses containing the keyword 'Deep Learning'
keyword = 'Deep Learning'
result_courses = fetch_courses_by_keyword(df, keyword)

print("\n".join(result_courses))
# Display the DataFram
