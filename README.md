# Evently

Evently is a modern event management application designed to help users create, manage, and attend events with ease. This project is based on a video guide by [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw). The tutorial video can be found [here](https://www.youtube.com/watch?v=zgGhzuBZOQg).

## Features

- **User Authentication:** Secure user login and registration system.
- **Event Creation:** Users can create events with detailed descriptions, dates, and locations.
- **Event Management:** Easy management of created events, including editing and deleting.
- **Event Attendance:** Users can join and leave events.
- **Responsive Design:** The application is fully responsive and works seamlessly on all devices.

## Demo

Check out the live deployment of Evently [here](https://evently-kappa-sage.vercel.app/).

## Installation

To get a local copy up and running, follow these simple steps.

## Screenshots

### Home Page
![Home Page](./public/assets/homepage.png)

### Event Creation Page
![Event Creation Page](./public/assets/homepage.png)

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Cheest98/evently.git

2. **Navigate to the project directory:**
   ```sh
   cd evently

3. **Install dependencies:**
   ```sh
   npm install
   
4. **Set up environment variables:**
 - Create a .env file in the root directory.
 - Add the following variables to the `.env` file
   ```sh
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=your_port (default: 3000)

5. **Run the application:**
   ```sh
   npm start
   
### Usage

1. Open your browser and go to http://localhost:3000.
2. Register or log in to your account.
3. Create, manage, and join events with ease.


### License
Distributed under the MIT License. See LICENSE for more information.



### License
Distributed under the MIT License. See LICENSE for more information.