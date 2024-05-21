# Drive Ease: A Comprehensive Web Application for the Rental Vehicle Industry

## Abstract
The Drive Ease web application addresses the existing challenges in the rental vehicle industry by facilitating seamless interactions between rental companies and customers. Currently, the absence of dedicated portals or apps for comparing rental prices and options across various companies has created a significant gap in the market. Drive Ease fills this void by offering a centralized platform where rental companies can list their vehicles, set rates, and provide additional services. Customers can easily browse through company profiles, vehicle details, and rental options, enabling informed decisions. The system streamlines the rental process through secure customer logins and intuitive interfaces, enhancing efficiency and user experience for both rental companies and customers. By providing transparent pricing, terms, and the ability for drivers to accept or reject booking requests, the system ensures a seamless and convenient rental experience for all stakeholders.

## Project Description
Drive Ease is a comprehensive web application designed to revolutionize the rental vehicle industry by bridging the gap between rental companies and customers. It addresses the challenges users face in comparing rental prices and options across multiple companies, providing a centralized platform that offers convenience, transparency, and efficiency.

### Objectives
- **Simplify the Rental Process**: For customers, the platform offers a user-friendly interface to browse a wide range of vehicles, compare prices, and make bookings according to their preferences. With options to book cars, bikes, and drivers, Drive Ease caters to diverse user needs, ensuring a seamless and personalized rental experience.
- **Empower Rental Companies**: Rental companies gain access to a dedicated portal where they can showcase their vehicles, set rental rates, and provide additional services. The platform empowers companies to manage their inventory effectively, respond to customer inquiries promptly, and streamline the booking process.
- **Innovative Features**: The web app introduces innovative features such as the ability for drivers to sign up individually, giving companies and independent drivers equal opportunities to participate in the system.

### Project Need
The rental vehicle industry faces several challenges, which Drive Ease aims to address:
- Centralized Platform
- Convenient Comparison
- Transparency
- Accessibility
- Efficiency
- Equal Opportunity
- Innovation
- Security
- Market Demand

### Features
#### User Features
- **User Registration and Authentication**: Secure registration and login process for users, utilizing Aadhaar card for identity verification.
- **Profile Management**: Users can manage their profile information and uploaded documents.
- **Vehicle Search and Booking**: Users can search for available vehicles, view transparent pricing and terms, and book vehicles for rental purposes.
- **Driver Request**: Users can request drivers for their rental vehicles, specifying preferences such as experience or language proficiency.
- **Real-time Updates**: Users receive real-time updates on bookings and availability changes.
- **Feedback and Rating System**: Users can provide feedback and ratings for rental experiences, enhancing transparency and accountability.

#### Driver Features
- **Driver Registration and Authentication**: Secure registration and login process for drivers, using Aadhaar card and license details for identity verification.
- **Handling Booking Requests**: Drivers receive booking requests from users and can accept or reject them based on availability and preference.
- **Profile Management**: Drivers can manage their profile information and availability status.
- **Real-time Updates**: Drivers receive real-time updates on bookings and changes in availability.

#### Company Features
- **Company Registration and Authentication**: Secure registration and login process for rental companies.
- **Vehicle and Driver Management**: Companies can add, edit, and manage their fleet of cars, bikes, and drivers, including availability and pricing.
- **Availability Management**: Companies can manage the availability of specific vehicles and drivers, adjusting availability based on demand.
- **Profile Management**: Companies can manage their profile information and uploaded documents.
- **Real-time Updates**: Companies receive real-time updates on bookings, availability changes, and other relevant information.

### Technologies and Tools
#### Technologies
- ReactJS
- ExpressJS and NodeJS
- Java Spring Boot Framework
- MongoDB
- Tailwind CSS

#### Tools
- VS Code Editor
- MongoDB Compass
- ThunderClient and Postman
- Github
- Tomcat

Drive Ease leverages these technologies and tools to deliver a robust, secure, and user-friendly web application, aiming to transform the rental vehicle industry by enhancing efficiency, transparency, and user experience for all stakeholders.

# Drive Ease Frontend

This is the frontend repository for the Drive Ease web application. The frontend is built using React and Vite. Follow the instructions below to set up and run the project locally.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or Yarn (version 1.x or higher)

## Getting Started

### 1. Clone the Repository
```markdown
git clone https://github.com/your-username/drive-ease-frontend.git
cd drive-ease-frontend
```
### 2. Install Dependencies
Using npm:
```markdown
npm install
```
Or using Yarn:
```markdown
yarn install
```
### 3. Set Up Environment Variables
Create a .env file in the root directory of the project and add the following environment variables:

```markdown
VITE_API_BASE_URL=http://localhost:5000/api
```
### 4. Run the Development Server
Using npm:

```markdown
npm run dev
```
Or using Yarn:

```markdown
yarn dev
```
The application will be available at http://localhost:3000.

### 5. Build for Production
To create a production build, run:

```markdown
npm run preview
```
Or using Yarn:

```markdown
yarn preview
```

### Project Structure

```markdown
drive-ease-frontend/
├── public/                     # Public assets
├── src/                        # Source files
│   ├── assets/                 # Static assets
│   ├── components/             # React components
│   ├── pages/                  # React pages
│   ├── styles/                 # CSS/SCSS files
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point for the application
├── .env                        # Environment variables
├── index.html                  # Main HTML file
├── package.json                # npm/Yarn dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```
### Backend Repository
The backend for this project is available in a separate repository. You can find it here:
https://github.com/jeel-butani/DriveEase-Backend

### Drive Ease Backend Repository

Follow the instructions in the backend repository's README to set up and run the backend server.

### Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

### Contact
If you have any questions, feel free to reach out:

#### Email: butanijeel1@gmail.com
#### GitHub: jeel-butani
