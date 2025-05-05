
## Acceptance Criteria

*   GIVEN a candidate search application
    *   WHEN the candidate search page loads
        *   THEN the information for one candidate should be displayed, including the candidate's name, username, location, avatar, email, html\_url, and company
    *   WHEN I click the "+" button
        *   THEN the candidate should be saved to the list of potential candidates and the next candidate's information should be displayed
    *   WHEN I click the "-" button
        *   THEN the next candidate's information should be displayed without saving the current candidate
    *   WHEN there are no candidates available to review
        *   THEN an appropriate message should be shown indicating no more candidates are available
    *   WHEN the potential candidates page loads
        *   THEN the user should see a list of previously saved potential candidates with their name, username, location, avatar, email, html\_url, and company
    *   WHEN the page reloads
        *   THEN the list of potential candidates should persist and be available for viewing
    *   WHEN there are no potential candidates
        *   THEN an appropriate message should be displayed indicating no candidates have been accepted

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd candidate-search-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Configuration

This application requires a GitHub Personal Access Token to increase the API rate limit.

1.  **Create a GitHub Personal Access Token:**
    *   Go to your GitHub settings.
    *   Navigate to Developer settings > Personal access tokens > Fine-grained tokens.
    *   Click "Generate new token".
    *   Give your token a descriptive name (e.g., "Candidate Search App Token").
    *   **Leave all default permissions.** You do not need to add any additional privileges for searching public profiles.
    *   Click "Generate token".
    *   **Copy your token immediately!** You will not be able to see it again after you leave the page.

2.  **Create a `.env` file:**
    *   In the `environment` folder at the root of the project, create a file named `.env`.
    *   Add your GitHub token to this file in the following format:
        ```env
        VITE_GITHUB_TOKEN=your_github_token_here
        ```
        Replace `your_github_token_here` with the token you copied.

## Screenshots

![Search Applicants](./screenshots/Screenshot%202025-05-04%20225225.jpg)
![Saved Applicants](./screenshots/Screenshot%202025-05-04%20225327.jpg)
## Usage

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  Open your web browser and navigate to the address shown in your terminal (usually `http://localhost:5173/`).

## Features

*   Display candidate information (name, username, location, avatar, email, GitHub profile link, company).
*   Navigate through candidates one by one.
*   Save potential candidates using the "+" button.
*   Skip candidates using the "-" button.
*   View a list of saved potential candidates.
*   Potential candidates list persists in local storage across page reloads.
*   Handles cases with no more candidates to review or no potential candidates saved.

## Deployment

This application can be deployed to platforms like Render.

1.  **Create a Render Account:** Sign up for a Render account if you don't have one.
2.  **Create a New Web Service:** In your Render dashboard, create a new Web Service.
3.  **Connect Your Repository:** Connect your GitHub repository where you have pushed this project.
4.  **Configure Build and Start Commands:**
    *   Render should automatically detect the Node.js environment.
    *   **Build Command:** `npm run build` or `yarn build`
    *   **Start Command:** `serve -s dist` (You might need to add `serve` as a dev dependency or ensure it's available in the build environment).
5.  **Add Environment Variable:**
    *   Go to the "Environment" section of your Web Service settings.
    *   Add a new environment variable:
        *   Key: `VITE_GITHUB_TOKEN`
        *   Value: Your GitHub Personal Access Token.
6.  **Deploy:** Trigger a manual deploy or enable automatic deploys from your connected branch.

Refer to the [Render documentation](https://render.com/docs/web-services) for more detailed instructions.

## Technologies Used

*   React
*   TypeScript
*   Vite (for development and building)
*   GitHub REST API
*   Local Storage (for persistence)
*   Render (for deployment)

## Future Enhancements (Bonus)

*   Implement sorting functionality for the potential candidates list (e.g., by name, location).
*   Add filtering options for the potential candidates list (e.g., filter by location, company).
*   Add pagination to the candidate search to fetch more candidates.
*   Implement a "remove" button on the potential candidates page.

## Credits

*   Starter code provided by the course/instructor.
*   Leverages the GitHub REST API.

## License

This project is licensed under the [MIT License](LICENSE).
