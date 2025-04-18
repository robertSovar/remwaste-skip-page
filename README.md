🗑️ RemWaste – Project Setup & Development Workflow
✅ Project Overview
RemWaste is a responsive web application built with Vite, React, and Tailwind CSS, designed to simplify skip size selection and provide a seamless user experience for waste removal services.

🚀 Project Initialization
Step 1: Setup & Configuration
Initialized the project using npm create vite@latest

Added a deploy.yml GitHub Actions workflow for deployment

Created a 404.html file to handle router errors on production hosting (e.g., GitHub Pages, Netlify)

Installed and configured Tailwind CSS for styling and responsive design

🌐 Routing & Navigation
Step 2: Page Structure & Navigation Logic
Defined React Router routes for all pages

Implemented logic to handle client-side navigation and redirection between views

📡 Data & UI Integration
Step 3: API and UI Implementation
Created a reusable api.js service to fetch dynamic data from a remote API

Built and styled the SkipSelector page to display skip options based on fetched data

Developed a dynamic Footer component that updates based on user selection

Implemented a SkipPage context to share selected skip data across components

Connected and styled the Footer to reflect the currently selected skip

🔧 Final Touches
Step 4: Testing & Refinements
Resolved minor layout issues, including consistent image sizing across all cards

Conducted manual testing to verify UI responsiveness and data flow

Finalized functionality and performed the final production push
