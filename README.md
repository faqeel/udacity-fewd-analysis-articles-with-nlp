# Evaluate a News Article with Natural Language Processing

> This project is for Udacity's [Front End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011).

This project requires to build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

## Getting started

### Prerequisites

In this project we are using Node development environment. Node.js and the Node Package Manager (NPM) should be installed on the local machine. In addition to acquire API credentials from [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis).

### Installing

To setup local development environment, clone this repo on your machine, navigate to its location in the terminal and run `npm install`.

## Running the project

### Development mode

To start the project on the development mode, navigate to project's location in the terminal and run `npm run build-dev` to start webpack-dev-server on port `8080`.

### Production mode

To start the project on the production mode, navigate to project's location in the terminal and run `npm run build-prod` to build the `dist` folder. Then run `npm run start` to start the Express server on port `8081`.

## Running the tests

Testing is done with [Jest](https://jestjs.io/). To run the tests, navigate to project's location in the terminal and run `npm run test`.

## Dependencies

-   [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
-   [CORS](https://expressjs.com/en/resources/middleware/cors.html) - a Connect/Express middleware that can be used to enable CORS with various options.
-   [dotenv](https://github.com/motdotla/dotenv) - Storing configuration in the environment separate from code.
-   [Express](https://expressjs.com/) - Web framework for Node.js
-   [Webpack/Webpack-cli](https://webpack.js.org/) - Module bundler

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details
