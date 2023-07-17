# OpenAI Chat Application

## Overview
This is a powerful chat application built using React, Node.js, and Express. The application leverages the OpenAI GPT-4 API to process and respond to user inputs, providing an engaging conversational interface.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [Deployment](#deployment)
5. [License](#license)
6. [Acknowledgements](#acknowledgements)

## Prerequisites
Before you begin, ensure you have met the following requirements:

* You have a working installation of Node.js (v14.x or later).
* You have an OpenAI API key.
* You have a basic understanding of JavaScript, React, and Express.

## Installation
To install the OpenAI Chat Application, follow these steps:

1. Clone this repository:
    ```
    git clone <url of your repository>
    ```

2. Navigate into the project directory:
    ```
    cd <directory name>
    ```

3. Install the required dependencies in both the client (React) and server (Express) directories. The respective `package.json` files list all the necessary packages.

For the client:
    ```
    cd client
    npm install
    ```

For the server:
    ```
    cd server
    npm install
    ```

## Running the Application
To run the OpenAI Chat Application:

1. In the server directory, start the server:
    ```
    cd server
    npm start
    ```

2. In the client directory, start the React application:
    ```
    cd client
    npm start
    ```

The React application will start on `http://localhost:3000/` and the server will start on `http://localhost:3001/`.

## Deployment
For the deployment process, we are will be using in the future Vercel for the front-end (React app) and Heroku for the back-end (Express server). 


Ensure you set the environment variables correctly in both Vercel and Heroku platforms using their respective dashboard.

## License
MIT License

## Acknowledgements
We would like to thank OpenAI for providing the API that powers this application.
