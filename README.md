# Doctime Frontend

Welcome to the Doctime frontend repository. This repository contains the frontend code for the Doctime project, a doctor booking application built with Vite and React.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
Doctime is a full-stack project that provides a platform for users to book appointments with doctors. The frontend is built using Vite and React. This README focuses on the frontend component of the project.

## Prerequisites
Before you begin, ensure you have the following prerequisites:

- Node.js and npm (or Yarn)


## Installation
1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/slimshady808/doctor-booking-app-frontend.git
   ```

2. Navigate to the project directory
```
cd frontend
``` 

3. install project dependencies

```
npm install
```

4. Configure your environment variables
You can view and manage the environmental variables in your `.env` file. Open it to set the necessary configuration values for your Doctime frontend. A list of all available environmental variables can be found in the [Environment Variables](#environment-variables) section below.

5. TO start developemt server run

```
npm run start
```
-  This will build the frontend and open the development server at http://localhost:5173 (or another available port if 3000 is already in use).


## Deploying the Backend

Before deploying your application, make sure to set up the backend server on your hosting platform. Ensure that you have all the necessary configurations, such as database connection settings, environment variables, and security measures in place.

For backend deployment, please refer to the backend repository for instructions and deployment guides:

[backend Repository](https://github.com/slimshady808/DjangoDoctorBookingApp.git).


## Environment Variables

The following environmental variables should be set in your `.env` file:


- `VITE_REACT_APP_PUBLIC_KEY`
- `VITE_REACT_APP_SECRET_KEY`
- `VITE_SERVER`
- `VITE_WSERVER`