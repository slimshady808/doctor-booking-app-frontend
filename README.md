# Doctime Frontend

Welcome to the Doctime frontend repository. This repository contains the frontend code for the Doctime project, a doctor booking application built with Vite and React.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Environment Variables](#environmental-variable)


## Project Overview
Doctime is a full-stack project that provides a platform for users to book appointments with doctors. The frontend is built using Vite and React. This README focuses on the frontend component of the project.

## Features

### Doctor Listings by Department
- Browse and explore a wide range of doctors categorized by departments, making it easy to find specialists in specific medical fields.

### Doctor Search
- Search for doctors by name, department, or other relevant criteria, enabling users to quickly locate their preferred healthcare providers.

### Sorting by Fee
- Sort the list of doctors based on their consultation fees, allowing users to find doctors that match their budget.

### Department Filtering
- Filter doctors based on the medical department, making it easy to find specialists in a specific area of healthcare.

### Date and Slot Selection
- Select appointment dates and time slots to book appointments at the user's convenience.

### Online Payment with Razorpay
- Make secure online payments for doctor appointments using the Razorpay payment gateway, ensuring a seamless and secure transaction process.

### Real-Time Chat with Doctors
- Engage in real-time chat conversations with doctors for immediate medical advice and consultations, improving the overall user experience.




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

## Screen Shot

![Homepage](screenshots/home.jpg)

![Homepage](screenshots/doc.jpg)

![Homepage](screenshots/booking.jpg)
