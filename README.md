# Candidate Search Application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple web application for employers to search and manage potential candidates by leveraging the GitHub API.

## Table of Contents

- [Project Description](#project-description)
- [Live Demo](#live-demo)
- [Acceptance Criteria](#acceptance-criteria)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Future Enhancements (Bonus)](#future-enhancements-bonus)
- [Credits](#credits)
- [License](#license)

## Project Description

The Candidate Search Application provides a user-friendly interface to interact with the GitHub REST API and discover potential job candidates. The application presents candidate profiles one at a time, allowing the user to make quick decisions: either "like" (save) the candidate for future consideration or "dislike" (skip) them. A separate page displays a persistent list of all candidates the user has saved, stored securely in the browser's local storage.

## Live Demo

You can access the live application deployed on Render here:

[**https://candidate-search-cib3.onrender.com/**](https://candidate-search-cib3.onrender.com/)

**IMPORTANT:** Replace `https://candidate-search-cib3.onrender.com` with the actual URL of your deployed application on Render.


## Screenshots

Here are some screenshots illustrating the application's functionality:

### Candidate Search Page

![Screenshot of Candidate Search Page](./screenshots/Screenshot%202025-05-04%20225225.jpg)

### Potential Candidates Page

![Screenshot of Potential Candidates Page](./screenshots/Screenshot%202025-05-04%20225327.jpg)


## Installation

1.  **Clone the repository:**
    ```bash
    git clone YOUR-REPO-URL-HERE
    cd candidate-search-app
    ```
    **IMPORTANT:** Replace `YOUR-REPO-URL-HERE` with the HTTPS or SSH URL of your GitHub repository.
2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use yarn
    yarn install
    ```

## Configuration

This application requires a GitHub Personal Access Token to increase the API rate limit for fetching user data.

1.  **Create a GitHub Personal Access Token:**
    *   Navigate to your GitHub Account Settings.
    *   Go to Developer settings > Personal access tokens > Fine-grained tokens.
    *   Click the "Generate new token" button.
    *   Provide a clear token name (e.g., `candidate-search-app-token`).
    *   **Crucially, leave all default permissions.** You do not need to grant any additional privileges as we are only accessing public profile information.
    *   Click "Generate token".
    *   **Copy your generated token immediately!** GitHub will not show you the token again after you leave this page. If you lose it, you'll need to generate a new one.

2.  **Create a `.env` file:**
    *   In the `environment` folder at the root of your project, create a new file named `.env`.
    *   Add your copied GitHub token to this file in the following format:
        ```env
        VITE_GITHUB_TOKEN=your_github_token_here
        ```
        **IMPORTANT:** Replace `your_github_token_here` with the actual token string you copied.

## Usage

1.  **Start the development server:**
    ```bash
    npm run dev
    # or if you use yarn
    yarn dev
    ```
2.  Open your web browser and navigate to the local development server address, typically `http://localhost:5173/`.

*   Use the "+" button to save the current candidate to your potential candidates list and proceed to the next.
*   Use the "-" button to skip the current candidate and proceed to the next without saving.
*   Navigate to the "Potential Candidates" page to view the list of candidates you have saved.

## Features

*   Display detailed information for a single GitHub user (candidate).
*   "Like" functionality to save a candidate to a persistent list.
*   "Dislike" functionality to skip a candidate.
*   Persistent storage of potential candidates using browser Local Storage.
*   View a dedicated list of all saved potential candidates.
*   Clear messages when no more candidates are available to review or when the potential candidates list is empty.
*   Navigation between the search and saved candidates pages.

## Deployment

This application is configured for deployment on platforms like Render.

1.  **Prepare for Deployment:** Ensure your code is committed and pushed to a GitHub repository.
2.  **Create a Render Account:** If you don't have one, sign up for a free Render account.
3.  **Create a New Web Service:** In your Render dashboard, click "New" and select "Web Service".
4.  **Connect Your Repository:** Link your GitHub account and select the repository containing this project.
5.  **Configure Build and Start Commands:**
    *   Render will likely auto-detect the Node.js environment and set the build command to `npm install` (or `yarn install`).
    *   Set the **Build Command** to `npm run build` (or `yarn build`).
    *   Set the **Start Command** to `serve -s dist`. (You might need to add `serve` as a dev dependency to your `package.json` if not already present: `npm install --save-dev serve`).
6.  **Add Environment Variable:**
    *   Go to the "Environment" section for your new Web Service.
    *   Add a new environment variable:
        *   Key: `VITE_GITHUB_TOKEN`
        *   Value: Your GitHub Personal Access Token. **Do not hardcode your token in your code!** Render's environment variables keep it secure.
7.  **Deploy:** Render will automatically build and deploy your application. You can also trigger manual deploys after code changes.

Refer to the [Render documentation on Web Services](https://render.com/docs/web-services) and [Environment Variables](https://render.com/docs/environment-variables) for more details.

## Technologies Used

*   **Frontend:** React, TypeScript
*   **Build Tool:** Vite
*   **API Integration:** GitHub REST API
*   **Data Persistence:** Browser Local Storage
*   **Deployment:** Render

## Future Enhancements (Bonus)

*   **Sorting:** Implement sorting functionality for the potential candidates list based on criteria like name, location, or number of followers.
*   **Filtering:** Add filtering options to the potential candidates list (e.g., filter by location, company, or language).
*   **Pagination:** Implement pagination or infinite scrolling for fetching more candidates from the GitHub API.
*   **Candidate Removal:** Add the ability to remove candidates from the potential candidates list.
*   **Improved UI/UX:** Enhance the visual design and user experience.

## Credits

*   Starter code provided by the course/instructor.
*   Utilizes the GitHub REST API for candidate data.

## License

This project is licensed under the [MIT License](LICENSE).
