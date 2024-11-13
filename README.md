# react-blog:

# Assignment - 0 : Getting Started with React Development


In this section, I will guide you through the steps I followed to set up the project using Vite with the React template.

## 1. Initialize the Vite Project
- First, I navigated to my project folder where I had cloned the empty Git repository.
- To create a new Vite project with the React template, I ran the following command:
  ```bash
  npm create vite@latest my-blog -- --template react
  ```
  This command created a folder named `my-blog` with all the necessary files for a React project using Vite.
- Afterward, I changed into the newly created project folder:
  ```bash
  cd my-blog
  ```
- To install the required project dependencies, I ran:
  ```bash
  npm install
  ```

## 2. Verify the Development Server
- To verify that everything was set up correctly, I started the development server with the following command:
  ```bash
  npm run dev
  ```
- Finally, I opened my browser and navigated to [http://localhost:5173](http://localhost:5173). The default Vite welcome page appeared, confirming that the setup was successful and everything was working as expected.


## Project Description
This project is a simple blog platform that showcases the basics of a React application using Vite for a streamlined setup and development process. The blog includes a custom `Header` component with navigation links, responsive design, and smooth hover transitions for an enhanced user experience.

## Setup Instructions
To set up and run this project locally:

1. Clone the repository:
   ```bash
   git clone [YOUR_REPOSITORY_URL]
   ```
2. Navigate to the project folder:
  cd my-blog

3. Install the dependencies:
  npm install

4. Start the development server:
  npm run dev

5. Open http://localhost:5173/ in your browser to view the application.


## Project Structure:

my-blog/
├── .gitignore           # Files and directories ignored by Git
├── README.md            # Project description and setup instructions
├── package.json         # Project configuration and dependencies
├── vite.config.js       # Vite configuration for development
└── src/
    ├── components/      # Folder for reusable components
    │   ├── Header.jsx   # Header component for site navigation
    │   └── Header.css   # CSS styling for the Header component
    ├── App.jsx          # Main application component
    ├── main.jsx         # Entry point for React app rendering
    └── index.css        # Global styles for the application

## Screenshots 
Light theme : ![alt text](image.png)
Dark theme : ![alt text](image-1.png)

## What I Learned
From this assignment, I learned the following:

1. **Setting up a React project with Vite**: I gained hands-on experience in setting up a React project using Vite, which provides faster build times and better developer experience compared to older tools like Create React App.
   
2. **Creating Reusable Components**: I learned how to build reusable React components, such as the `Header`, and structure the project with a clear separation of concerns between components, styles, and global settings.
   
3. **CSS Styling for React Components**: I learned how to apply CSS to specific components in React, keeping the styling modular and scalable by organizing it into separate files (e.g., `Header.css` for the `Header` component).

4. **Implementing Dark Mode**: As part of the bonus challenge, I implemented a dark mode toggle feature in the header, allowing users to switch between light and dark themes for a better user experience.

5. **Responsive Design**: I enhanced the design of the `Header` component to be responsive, ensuring that it adapts well to various screen sizes, making the application user-friendly on both mobile and desktop devices.

6. **Adding Hover Effects and Transitions**: I implemented smooth hover effects and transitions on the navigation links and dark mode toggle, improving the visual appeal and interactivity of the user interface.


-----------------------------------------------------------------------------------------





