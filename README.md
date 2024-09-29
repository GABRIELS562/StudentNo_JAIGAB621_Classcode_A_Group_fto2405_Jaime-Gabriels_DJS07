# DJS07 - Build a Meme Generator

In this challenge you are required to code-along the Scrimba lesson: https://scrimba.com/playlist/prXJpCQ

This starter repo only has CSS styling added to the empty React project.

After cloning run `npm install` to install dependencies.

-------------------------------------------------------------------------------------------------------------------------------------------------------

1. Discuss how to create a new React application.

- check or install node js
- create-react-app is a package that generates the base structure for a new React project.
- npm start in terminal
  
2.Explain the purpose of the npm install command and the node_modules directory.
- The npm install command is used to install all the dependencies and packages defined in the package.json file.

3 Review the files and directories in a typical React project. 

- When you create a React application using create-react-app, it generates several files and folders by default. Here’s a review of the main ones:

	1.	public/ Directory:
	Contains static assets like the index.html file and favicon.
	The index.html file is the single HTML page into which your React app will be rendered. The root DOM element (typically 
        <div id="root"></div>)  is where React injects the components.
	2.	src/ Directory:
	•	This is where your React application code lives.
	•	Key files:
	•	index.js: The entry point of the React application. It renders the root component (<App />) into the DOM.
	•	App.js: The main component, which can be customized to hold your app’s UI and logic.
	•	App.css: Default styling for the App.js component.
	•	index.css: Global CSS styles for the application.
	3.	package.json:
	•	The configuration file for your project, which defines dependencies, scripts, and project metadata.
	•	Key sections:
	•	dependencies: Lists packages that are required to run the app (e.g., react, react-dom).
	•	scripts: Contains commands for common tasks (e.g., npm start, npm build).
	4.	node_modules/:
	•	Contains all the installed npm packages required by your project.
	5.	.gitignore:
	•	A file that lists files and directories Git should ignore (e.g., node_modules/, build artifacts, etc.).
	6.	README.md:
	•	Provides documentation about the project, including instructions for setup, running the app, and more.



4. Discuss the importance of structuring your application in a way that is easy to understand and maintain.
   -Readability, scalability, Reusable, Easier to maintain and Debug.  


5. Explain how to break down the UI into reusable components.
 - look at the UI design and find sections that can be isolated. Eg. Header, Footer. Each component has a single resopnsibility.
  
6. Review how to pass data between components using props. 
- Use props to make components flexible. Props allow you to pass data to components, making them reusable in different contexts.
- Instead of hard-coding data in a component, you can pass it as props, making the component more generic and adaptable.
- Parent Component: The component that holds or generates the data.
- Child Component: The component that receives the data via props.

7. Discuss the concept of state in React and why it is important.
- State in React refers to an object that holds data or information about the component. It represents the part of the app that can change, either     through user interaction or data updates. Unlike props, which are passed from parent to child components, state is managed within the component itself and can be modified directly by the component using special React hooks like useState. In summary, state is fundamental to building dynamic, interactive applications in React by managing data that can change and automatically reflecting those changes in the user interface.



8. Explain how to use the useState hook to manage state in functional components. Provide examples of how state can be used to control the data and behaviour of your components.
   
import React, { useState } from "react";

function Counter() {
  // Initialize state with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevUser => ({
      ...prevUser,    // Spread operator to copy previous state
      [name]: value   // Update the specific property (name or age)
    }));
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <p>{`User: ${user.name}, Age: ${user.age}`}</p>
    </form>
  );
}

export default UserForm;

