# LedgerMind AI Accounting

An AI-powered accounting assistant for SMEs and freelancers that automates transaction categorization, predicts cashflow, and provides financial insights.

## Technologies Used

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Styling:** Tailwind CSS

## Prerequisites

Before running this project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Install Dependencies

Navigate to the project directory and install the required packages using npm:

```bash
npm install
```

### 2. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:5173/`. Check your terminal for the exact local URL.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles the application for production into the `dist` directory.
- `npm run lint`: Runs ESLint to enforce code quality and standard rules.
- `npm run preview`: Boots up a local static web server to preview the built `dist` folder.

## Project Structure

A brief overview of the key directories and files:

- `src/`: Contains the React components, services, and core application logic.
- `public/`: Static assets that bypass the build process and are served as-is.
- `index.html`: The main HTML entry point.
- `vite.config.js`: Configuration file for Vite.
- `package.json`: Project metadata, dependencies, and script definitions.

## License

Please refer to the `LICENSE` file in the root directory for licensing information.
