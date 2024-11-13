# react-blog:

# Project Setup with Vite

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
