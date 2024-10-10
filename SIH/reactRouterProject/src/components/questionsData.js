// questionsData.js

export const quizData = {
  ML: [
    {
      question: "What is overfitting in machine learning?",
      options: ["When the model is too simple", "When the model performs well on training data but poorly on new data", "When the model is trained on insufficient data", "When the model is trained on noisy data"],
      answer: 1,
    },
    {
      question: "Which of the following algorithms is used for classification problems?",
      options: ["K-Means", "Linear Regression", "Logistic Regression", " PCA (Principal Component Analysis)"],
      answer: 2,
    },
    {
      question: "Which of the following is a method to prevent overfitting in a machine learning model?",
      options: ["Increasing the learning rate", " Using a smaller dataset", "Implementing regularization techniques like L1 or L2", " Using a more complex model"],
      answer: 2,
    },
    {
      question: " What is the main objective of Principal Component Analysis (PCA)?",
      options: [" To reduce the dimensionality of the dataset while retaining as much information as possible", " To increase the complexity of the model", "To improve model accuracy by adding more features", "To train a neural network faster"],
      answer: 0,
    },
    {

      question: "Which evaluation metric is most appropriate for imbalanced classification problems?",
      options: ["Accuracy", "Precision-Recall", "Mean Squared Error", " R-squared"],
      answer: 1,
    },
    {
      question: "What is the purpose of a loss function in machine learning?",
      options: [" To initialize weights in the model", "To measure the error or difference between the predicted and actual output", "To optimize the dataset", "To create new features from existing data"],
      answer: 1,
    },
    {
      question: " In which of the following machine learning techniques do we adjust the weights to minimize the error?",
      options: ["Reinforcement Learning", "Supervised Learning", "Clustering", "Cross-validation"],
      answer: 1,
    },
    {
      question: "What is the role of a hyperparameter in machine learning models?",
      options: ["A parameter learned from data during training", "A parameter set before the learning process begins", "A parameter optimized automatically during training", "A parameter that ensures the model never overfits"],
      answer: 1,
    },
    {
      question: "Which of the following is a supervised learning algorithm?",
      options: [" K-Means Clustering", "DBSCAN (Density-Based Spatial Clustering)", "Support Vector Machine (SVM)", "Hierarchical Clustering"],
      answer: 2,
    },
    {
      question: "In the context of neural networks, what does 'backpropagation' refer to?",
      options: ["A process of training multiple models", "The process of calculating the error gradient and updating weights", "A method to initialize weights in the model", "A way of normalizing the dataset"],
      answer: 1,
    },
   
  ],
  MERN: [
   
    {
      question: "What is the primary purpose of the middleware in Express.js?",
      options: ["To create a user interface", "To handle HTTP requests and responses", "To perform tasks like logging, authentication, and request parsing", "To connect to the database"],
      correctAnswer: 2
    },
    {
      question: "Which method in MongoDB is used to insert a document into a collection?",
      options: ["insert()", "insertOne()", "save()", "insertDocument()"],
      correctAnswer: 1
    },
    {
      question: "In Express.js, which method is used to define a route that responds to HTTP GET requests?",
      options: ["app.get()", "app.post()", "app.route()", "app.send()"],
      correctAnswer: 0
    },
    {
      question: "How do you pass data from a parent component to a child component in React?",
      options: ["Using Redux", "By using Hooks", "Using props", "By using state"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is true about state in React?",
      options: ["State is immutable and should never be changed directly.", "State can be modified directly inside the render method.", "Props and state are interchangeable.", "State is used only for managing form inputs."],
      correctAnswer: 0
    },
    {
      question: "Which of the following is the default HTTP status code for a successful HTTP POST request?",
      options: ["200", "201", "301", "404"],
      correctAnswer: 1
    },
    {
      question: "In Node.js, which of the following is NOT a built-in module?",
      options: ["http", "path", "fs", "request"],
      correctAnswer: 3
    },
    {
      question: "How do you handle asynchronous operations in Node.js?",
      options: ["By using Promises", "By using async/await", "By using callbacks", "All of the above"],
      correctAnswer: 3
    },
    {
      question: "Which of the following is true about React's component lifecycle methods?",
      options: ["componentDidMount is called before the component is rendered", "componentWillUnmount is called after the component is mounted", "componentDidUpdate is called after a component's state or props change", "componentDidCatch is called only during error handling"],
      correctAnswer: 2
    },
    {
      question: "Which method is used to update the state in a React functional component?",
      options: ["this.setState()", "useState()", "componentWillUpdate()", "setState()"],
      correctAnswer: 1
    },
    
  ],
  WebDevelopment : [
    {
      question: "Which HTML element is used to define the structure of a web page?",
      options: [
        "<head>",
        "<body>",
        "<html>",
        "<div>"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the purpose of the `async` attribute in a script tag?",
      options: [
        "To execute the script asynchronously after the document has finished parsing.",
        "To execute the script in the order it appears in the document.",
        "To delay the execution of the script until after the document has loaded.",
        "To prevent the script from executing if the document fails to load."
      ],
      correctAnswer: 0
    },
    {
      question: "Which CSS property is used to control the layout of flex items?",
      options: [
        "flex-direction",
        "flex-wrap",
        "justify-content",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      question: "In JavaScript, what is the difference between `null` and `undefined`?",
      options: [
        "`null` is an object; `undefined` is a type.",
        "Both are the same and can be used interchangeably.",
        "`null` indicates the absence of value; `undefined` indicates a variable has been declared but not assigned a value.",
        "`null` is used for objects; `undefined` is used for primitive types."
      ],
      correctAnswer: 2
    },
    {
      question: "What is the role of the `viewport` meta tag in responsive web design?",
      options: [
        "To control the layout of the website on mobile devices.",
        "To specify the character set of the document.",
        "To define the width and height of the web page.",
        "To ensure compatibility with older browsers."
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following methods is used to send data to the server in an HTTP request?",
      options: [
        "GET",
        "POST",
        "PUT",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the purpose of the `defer` attribute in a script tag?",
      options: [
        "To prevent the script from blocking HTML parsing while loading.",
        "To execute the script in the order it appears in the document after the HTML is fully parsed.",
        "To execute the script only when the page is fully loaded.",
        "To load the script from an external source."
      ],
      correctAnswer: 1
    },
    {
      question: "Which HTTP status code indicates a successful request?",
      options: [
        "404",
        "500",
        "200",
        "301"
      ],
      correctAnswer: 2
    },
    {
      question: "In CSS, what does the `z-index` property control?",
      options: [
        "The opacity of an element.",
        "The stacking order of positioned elements.",
        "The visibility of an element.",
        "The size of an element."
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a common method for improving website performance?",
      options: [
        "Reducing the size of images",
        "Using too many HTTP requests",
        "Including large libraries without minification",
        "Ignoring caching strategies"
      ],
      correctAnswer: 0
    }

  ],

  JavaScript : 
  [
    {
      question: "What will be the output of the following code? console.log(typeof null);",
      options: ["\"null\"", "\"undefined\"", "\"object\"", "\"string\""],
      correctAnswer: 2
    },
    {
      question: "What is the result of the following code? console.log(0.1 + 0.2 === 0.3);",
      options: ["true", "false", "undefined", "TypeError"],
      correctAnswer: 1
    },
    {
      question: "Which of the following will NOT trigger a JavaScript error?",
      options: [
        "console.log(e)",
        "throw e",
        "console.log('error')",
        "None of the above"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the output of the following code? let x = { name: 'Alice' }; let y = x; y.name = 'Bob'; console.log(x.name);",
      options: ["\"Alice\"", "\"Bob\"", "undefined", "TypeError"],
      correctAnswer: 1
    },
    {
      question: "What does the following code output? let a = [1, 2, 3]; let b = a; b[0] = 0; console.log(a);",
      options: ["[0, 2, 3]", "[1, 2, 3]", "[1, 0, 3]", "TypeError"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is true about closures in JavaScript?",
      options: [
        "Closures can access variables from their own scope.",
        "Closures can access variables from the parent scope.",
        "Closures can access global variables.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "What will be the output of the following code? (function() { console.log('First'); setTimeout(function() { console.log('Second'); }, 0); console.log('Third'); })();",
      options: ["First, Second, Third", "First, Third, Second", "Third, First, Second", "Second, Third, First"],
      correctAnswer: 1
    },
    {
      question: "Which of the following statements is true regarding the `this` keyword in JavaScript?",
      options: [
        "`this` always refers to the global object.",
        "In a regular function, `this` refers to the object that calls the function.",
        "In an arrow function, `this` is dynamically bound.",
        "`this` can never be `undefined`."
      ],
      correctAnswer: 1
    },
    {
      question: "What will be the output of the following code? console.log(1 + '2' + '2' - 1);",
      options: ["\"1221\"", "\"221\"", "221", "NaN"],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of the `bind()` method in JavaScript?",
      options: [
        "It creates a new function that, when called, has its `this` keyword set to the provided value.",
        "It invokes the function immediately with the specified `this` value.",
        "It permanently binds a function to an object.",
        "It changes the `this` context of a function without returning a new function."
      ],
      correctAnswer: 0
    },
  ],

  Python : [
    {
      question: "What will be the output of the following code? print(type([]) is list)",
      options: ["True", "False", "TypeError", "None"],
      correctAnswer: 0
    },
    {
      question: "What is the result of the following code? def func(a, b=[]): b.append(a); return b; print(func(1)); print(func(2, [])); print(func(3))",
      options: ["[1], [2], [3]", "[1], [2], [1, 3]", "[1], [2], [2, 3]", "[1], [2], [1, 2, 3]"],
      correctAnswer: 1
    },
    {
      question: "Which of the following statements is true about Python decorators?",
      options: [
        "Decorators can modify the behavior of a function or class.",
        "Decorators can be used only with functions.",
        "Decorators can only be defined within the function they modify.",
        "Decorators cannot accept arguments."
      ],
      correctAnswer: 0
    },
    {
      question: "What is the output of the following code? class A: def __init__(self): self.x = 1; class B(A): def __init__(self): self.x = 2; super().__init__(); obj = B(); print(obj.x)",
      options: ["1", "2", "AttributeError", "None"],
      correctAnswer: 1
    },
    {
      question: "What will be the output of the following code? x = 'hello'; y = 'world'; z = x + y; print(z)",
      options: ["'hello world'", "'helloworld'", "'hello world!'", "TypeError"],
      correctAnswer: 1
    },
    {
      question: "What is the primary purpose of the __init__ method in Python?",
      options: [
        "It is used to destroy an object.",
        "It initializes the instance of a class.",
        "It defines a method to call on class instantiation.",
        "It is the main method of a Python program."
      ],
      correctAnswer: 1
    },
    {
      question: "What is the result of the following code? print(bool(0), bool(''), bool([]), bool(()), bool(None), bool(42))",
      options: ["True, True, True, True, True, True", "False, False, False, False, False, True", "False, False, False, False, True, True", "False, False, False, False, False, False"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is the correct way to create a generator in Python?",
      options: [
        "def my_gen(): yield 1; yield 2; yield 3",
        "def my_gen(): return 1; return 2; return 3",
        "my_gen = (x for x in range(3))",
        "Both A and C"
      ],
      correctAnswer: 3
    },
    {
      question: "What will be the output of the following code? def foo(a, b=[]): b.append(a); return b; print(foo(1)); print(foo(2, [])); print(foo(3, [3]))",
      options: ["[1], [2], [3]", "[1], [2], [3]", "[1], [2], [3, 3]", "[1], [2], [3, 0]"],
      correctAnswer: 2
    },
    {
      question: "What is the time complexity of accessing an element in a list in Python?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: 0
    },
  ],

  Rust : [
    {
      question: "What is the purpose of the std::mem::drop function in Rust?" ,
      options: ["It creates a new instance of a value.", " It temporarily borrows a value for a specific scope.", " It takes ownership of a value and drops it, effectively freeing its resources.", "It prevents a value from being moved."],
      correctAnswer: 2
    },
    {
      question: "Which of the following statements about Rust ownership is true?",
      options: [
        "Ownership can be transferred using the move keyword.",
        "Multiple mutable references to the same data are allowed.",
        "A value can have multiple owners at the same time.",
        "Ownership is not checked at compile time."
      ],
      correctAnswer: 0
    },
    {
      question: 'What will be the output of the following code? fn main() { let x = 10; { let x = 5; println!({}", x); } println!("{}", x);}',
      options: ["5, 10", "10, 5", "10, 10", "Compilation error"],
      correctAnswer: 0
    },
    {
      question: "Which trait is used for comparison in Rust?",
      options: ["Eq", "Ord", "PartialEq", "All of the above"],
      correctAnswer: 3
    },
    {
      question: 'What does the following code snippet do? fn main() { let v = vec![1, 2, 3]; let ptr = v.as_ptr(); std::mem::forget(v); unsafe { println!("{}", *ptr); } }',
      options: ["Prints 1", "Undefined behavior", "Compilation error", "Prints the memory address of ptr"],
      correctAnswer: 1
    },
    {
      question: "In Rust, what is the purpose of the unsafe keyword?",
      options: [
        "It marks blocks of code that can potentially cause compilation errors.",
        "It allows access to functions and methods that are not guaranteed to be safe.",
        "It prevents data races.",
        "It restricts the use of mutable references."
      ],
      correctAnswer: 1
    },
    {
      question: 'What is the output of the following code? fn main() { let x = 2; let y = { let x = 3; x + 1 }; println!("{}", x + y); }',
      options: ["3", "4", "5", "6"],
      correctAnswer: 2
    },
    {
      question: "What will happen if you try to compile the following Rust code? fn main() { let mut s1 = String::from('Hello'); let s2 = s1; s1.push_str(', World!'); }",
      options: [
        "The code will compile and run successfully.",
        "The code will compile but panic at runtime.",
        "The code will not compile due to a borrow checker error.",
        "The code will compile but s1 will be empty."
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a valid Rust closure?",
      options: [
        "|x| x + 1",
        "fn(x) { return x + 1; }",
        "let add = |x, y| { x + y; };",
        "Both A and C"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the effect of using the #[derive(Debug)] attribute in a struct?",
      options: [
        "It allows instances of the struct to be formatted using the Debug formatter.",
        "It automatically implements the Clone trait for the struct.",
        "It makes the struct public.",
        "It prevents the struct from being mutable."
      ],
      correctAnswer: 0
    },
  ],

  Ruby :
  [
    {
      question: "What will be the output of the following Ruby code? def test yield end test { puts 'Hello' }",
      options: ["Hello", "nil", "Compilation error", "'Hello'"],
      correctAnswer: 0
    },
    {
      question: "What does the attr_accessor method do in a Ruby class?",
      options: [
        "It defines a class variable.",
        "It creates getter and setter methods for instance variables.",
        "It creates a private method.",
        "It allows access to a class method."
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a valid way to define a lambda in Ruby?",
      options: [
        "my_lambda = lambda { |x| x + 1 }",
        "my_lambda = ->(x) { x + 1 }",
        "Both A and B",
        "my_lambda = Function.new { |x| x + 1 }"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the output of the following code? a = [1, 2, 3] b = a.map { |x| x * 2 } puts b",
      options: ["[1, 2, 3]", "[2, 4, 6]", "[3, 6, 9]", "2, 4, 6"],
      correctAnswer: 1
    },
    {
      question: "What will the following code output? def test yield 1 yield 2 end test { |x| puts x }",
      options: ["1", "2", "1, 2", "nil"],
      correctAnswer: 2
    },
    {
      question: "Which of the following statements about Ruby modules is true?",
      options: [
        "Modules can inherit from other modules.",
        "Modules cannot be instantiated.",
        "Modules can contain instance variables.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "What does the each_with_index method do in Ruby?",
      options: [
        "It iterates over an array, returning the element's index.",
        "It iterates over an array and yields both the element and its index to a block.",
        "It combines the elements of two arrays.",
        "It reverses the order of elements in an array."
      ],
      correctAnswer: 1
    },
    {
      question: "What is the output of the following Ruby code? class Parent def method 'Parent' end end class Child < Parent def method 'Child' end end puts Child.new.method",
      options: ["Parent", "Child", "No output", "Compilation error"],
      correctAnswer: 1
    },
    {
      question: "Which keyword is used to handle exceptions in Ruby?",
      options: ["try", "except", "rescue", "catch"],
      correctAnswer: 2
    },
    {
      question: "What will be the output of the following code? def foo yield if block_given? end foo { puts 'Block given!' } foo",
      options: ["Block given!", "nil", "'Block given!' and nil", "Compilation error"],
      correctAnswer: 2
    },
  ],

  Django : [
    {
      question: "What does the django.contrib.auth module provide?",
      options: [
        "Database ORM functionalities",
        "Authentication and authorization mechanisms",
        "URL routing capabilities",
        "Middleware for session management"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of the migrate command in Django?",
      options: [
        "To create a new Django application",
        "To apply changes to the database schema",
        "To load initial data into the database",
        "To run a development server"
      ],
      correctAnswer: 1
    },
    {
      question: "In Django, what is the function of a middleware?",
      options: [
        "It handles URL routing.",
        "It processes requests and responses globally before reaching the view.",
        "It defines the database schema.",
        "It handles the rendering of templates."
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is NOT a valid way to define a model in Django?",
      options: [
        "Using class Meta",
        "Defining fields as class attributes",
        "Using a dictionary to define the fields",
        "Inheriting from models.Model"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the purpose of the forms.py file in a Django application?",
      options: [
        "To define URL patterns",
        "To handle database migrations",
        "To create and manage forms for user input",
        "To define middleware components"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the default database backend used by Django?",
      options: ["PostgreSQL", "SQLite", "MySQL", "Oracle"],
      correctAnswer: 1
    },
    {
      question: "Which function is used to render a template in Django views?",
      options: [
        "render_template()",
        "render_to_response()",
        "render()",
        "get_template()"
      ],
      correctAnswer: 2
    },
    {
      question: "How can you create a custom management command in Django?",
      options: [
        "By defining a function in views.py",
        "By creating a new module in the app directory called management/commands/",
        "By using the startapp command with a --management flag",
        "By modifying the urls.py file"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of the get_absolute_url method in a Django model?",
      options: [
        "To return the URL for accessing a view",
        "To define the URL pattern for a model",
        "To provide a canonical URL for an object",
        "To handle redirection of requests"
      ],
      correctAnswer: 2
    },
    {
      question: "Which command is used to create a new Django application?",
      options: [
        "django-admin createapp",
        "django-admin startapp",
        "python manage.py newapp",
        "python manage.py startapp"
      ],
      correctAnswer: 1
    },
  ],

  OOP : [
    {
      question: "What are the four main principles of OOP?",
      options: [
        "Encapsulation, Abstraction, Inheritance, Polymorphism",
        "Composition, Inheritance, Delegation, Encapsulation",
        "Encapsulation, Abstraction, Composition, Association",
        "Inheritance, Polymorphism, Aggregation, Composition"
      ],
      correctAnswer: 0
    },
    {
      question: "In which scenario would you use an abstract class instead of an interface?",
      options: [
        "When you need to provide a default implementation of a method.",
        "When you need to define multiple inheritance.",
        "When you want to define a contract without implementation.",
        "When you need to provide properties."
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is NOT a characteristic of polymorphism?",
      options: [
        "Method overloading",
        "Method overriding",
        "Typecasting",
        "Encapsulation"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the main difference between aggregation and composition?",
      options: [
        "Aggregation represents a 'has-a' relationship, while composition represents a 'part-of' relationship.",
        "Aggregation is a strong relationship, while composition is a weak relationship.",
        "Composition allows shared ownership, while aggregation does not.",
        "There is no difference; they are synonyms."
      ],
      correctAnswer: 0
    },
    {
      question: "In OOP, what is the purpose of the super keyword?",
      options: [
        "To refer to the current instance of the class.",
        "To call a method from the parent class.",
        "To create an instance of a class.",
        "To declare an abstract method."
      ],
      correctAnswer: 1
    },
    {
      question: "What is the result of attempting to instantiate an abstract class?",
      options: [
        "The abstract class is instantiated as an object.",
        "A compile-time error occurs.",
        "A runtime error occurs.",
        "The class is instantiated with null values."
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is an example of encapsulation?",
      options: [
        "A class that cannot be instantiated",
        "The use of access modifiers to restrict access to class members",
        "A method that is overridden in a derived class",
        "A method that has the same name but different parameters"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a key advantage of using interfaces in OOP?",
      options: [
        "They can provide default implementation for methods.",
        "They allow multiple inheritance.",
        "They restrict access to implementation details.",
        "They provide a way to manage state."
      ],
      correctAnswer: 1
    },
    {
      question: "What is the primary purpose of the final keyword in OOP?",
      options: [
        "To make a method inaccessible to subclasses.",
        "To prevent a class from being subclassed.",
        "To prevent method overriding.",
        "All of the above."
      ],
      correctAnswer: 3
    },
    {
      question: "In which situation would you use the instanceof operator?",
      options: [
        "To check if a class can be instantiated",
        "To check if an object is an instance of a specific class or interface",
        "To compare two objects for equality",
        "To determine the size of an object in memory"
      ],
      correctAnswer: 1
    },
  ],

  DeepLearning : [
    {
      question: "Which of the following optimizers is specifically designed to adapt the learning rate based on the past gradients of the model?",
      options: [
        "Stochastic Gradient Descent (SGD)",
        "Adam",
        "RMSprop",
        "AdaGrad"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of using dropout in neural networks?",
      options: [
        "To increase the size of the training dataset",
        "To reduce overfitting by randomly setting a fraction of the input units to 0 during training",
        "To improve the accuracy of the model by adding noise to the inputs",
        "To speed up the training process"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following is true about convolutional neural networks (CNNs)?",
      options: [
        "They are primarily used for sequential data analysis.",
        "They require a fixed-size input.",
        "They can automatically learn spatial hierarchies of features.",
        "They cannot be used for image classification tasks."
      ],
      correctAnswer: 2
    },
    {
      question: "What is the vanishing gradient problem?",
      options: [
        "The gradients become too large during training.",
        "The gradients become too small, hindering the training of deep networks.",
        "The loss function becomes undefined.",
        "The model converges too quickly."
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following activation functions is generally preferred for hidden layers in deep learning?",
      options: [
        "Sigmoid",
        "Tanh",
        "ReLU",
        "Softmax"
      ],
      correctAnswer: 2
    },
    {
      question: "In the context of recurrent neural networks (RNNs), what does the term 'sequence to sequence' (Seq2Seq) refer to?",
      options: [
        "A model that can process sequences of varying lengths.",
        "A model architecture designed for tasks where both input and output are sequences.",
        "A method of combining multiple RNNs into a single model.",
        "A technique for regularizing RNNs."
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following techniques is commonly used to prevent overfitting in deep learning models?",
      options: [
        "Data augmentation",
        "Increasing the model complexity",
        "Reducing the size of the training dataset",
        "Using a lower learning rate"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of batch normalization in deep learning?",
      options: [
        "To reduce the number of parameters in the model",
        "To normalize the inputs to each layer, which helps to stabilize and accelerate training",
        "To prevent overfitting by adding noise to the training data",
        "To increase the depth of the neural network"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following architectures is best suited for processing sequential data?",
      options: [
        "Convolutional Neural Network (CNN)",
        "Fully Connected Neural Network (FCNN)",
        "Recurrent Neural Network (RNN)",
        "Generative Adversarial Network (GAN)"
      ],
      correctAnswer: 2
    },
    {
      question: "What is a Generative Adversarial Network (GAN)?",
      options: [
        "A type of neural network that can predict future values based on past data.",
        "A framework where two neural networks compete against each other to generate new data samples.",
        "A neural network that performs classification tasks.",
        "A network that only uses convolutional layers."
      ],
      correctAnswer: 1
    }
  ],

  // Similarly add for JavaScript, Python, Rust, Ruby, Django, OOP, Deep Learning, Web Development
};
