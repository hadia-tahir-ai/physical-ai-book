# Quickstart Guide

This guide provides basic instructions for setting up and running the development environment for the Physical AI Digital Book.

## Prerequisites

1.  **Node.js**: Ensure you have Node.js version 18.x or higher installed.
2.  **npm**: npm is included with Node.js.
3.  **Git**: The project uses Git for version control.
4.  **Jan.ai**: You MUST have the Jan.ai desktop application installed and running. The API server must be active on `http://127.0.0.1:1337`.

## Development Setup

1.  **Clone the Repository**
    ```bash
    # This step is already done if you are reading this file
    git clone <repository-url>
    cd physical-ai-book
    ```

2.  **Install Dependencies**
    This command will install Docusaurus and all other necessary packages.
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    This command starts the local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
    ```bash
    npm start
    ```

## Running the Full Experience

-   The website will be available at `http://localhost:3000`.
-   For the chatbot to function, ensure your Jan.ai application is running in the background. If it's not, the chat widget will display an error message.

## Building for Production

To create a static production build of the site:

```bash
npm run build
```

This command generates static content into the `build` directory, which can then be served by any static content hosting service (like GitHub Pages).
