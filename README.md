# covid-tracker <br />
![stars](https://img.shields.io/github/stars/Minakshi-Verma/covid-tracker) [![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://img.shields.io/github/license/Minakshi-Verma/covid-tracker) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) ![Maintainability](https://api.codeclimate.com/v1/badges/39c95c84b11b91c11a7b/maintainability) ![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fminakshi_12) 
 

Covid tracker provides the records of COVID-19 cases globally as well as based on a selected country. We are fetching live COVID-19 data (from a public API) for the number of infected, recovered, and death cases. In addition to numeric data, results are diplayed on charts to provide better visibibility.

### Deployed site: https://covid-tracker-3yff7fz1f.vercel.app/

## Tech Stack
React || Material UI || CSS || Vercel 

### Public API used: https://covid19.mathdro.id/api

### Initialize the project using create-react-app ./

### Dependancies (using npm install --save dependancyName)
axios  <br />
react-chartjs-2    //great library for making charts   <br />
chart.js          //needed for react-chartjs-2 to work   <br />
react-countup    //help us  make animation while counting numbers   <br />
classNames      //classnames function takes any number of arguments (str or object) and return the truthy value associated with the key   <br />
@material-ui/core   <br />

### Available Scripts
In the project directory, you can run:

### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.

### It is important while naming ther css files in react application, to use the prefix .module (example: Card.module.css). This naming convention confined the styling to that particular file and it does not applied on the other components. That can lead to interference and unpredictable code.
