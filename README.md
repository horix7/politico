# POLITICO

[![Build Status](https://travis-ci.org/horix7/politico.svg?branch=develop)](https://travis-ci.org/horix7/politico)  [![Coverage Status](https://coveralls.io/repos/github/horix7/politico/badge.svg?branch=develop)](https://coveralls.io/github/horix7/politico?branch=develop)

## Description

**Politico** is the voting system for any goverment where user can register and candidates can register and vote for the candiates applying on different goverment offices 

**Politico Features**
  * Users can sign up.
  * Users can login.
  * Logged in User can create a Political Party 
  * Admin can make an office 
  * candidate can make a petition 
  * Admin can update the existing office 
  * Admin can delete a Party 
  * User can view Candidates 
  * User can view one particular candidate
  * User admin can view all candidates 
  * user can create a vote 
  * admin can view results for the office votes 
  * admin can delete an office 
  * admin can view All users 

  ### APP on heroku Link 
   Api App hosted on [Heroku](https://politicko.herokuapp.com/)

  ### APP UI on github pages 
   Api App hosted on [GH-Pages](https://horix7.github.io/politico/UI/html/landing.html)

    
  ## Documentation
   #### you can check the Documentation on Heroku docs [API documentation](https://politicko.herokuapp.com/politico)

    
Method | Endpoint | Functionality
 -------| -------- | -------------
 POST | /api/v1/auth/signup | Create user account
 POST | /api/v1/auth/signin | User login
 GET | /api/v1/allusers | Get all the users
 GET | /api/v1/useraccount/:accountid | Get one  accounts
 POST | /api/v1/parties/ | Create a political party
 PUT | /api/v1/parties/:partyid/ | Update the party info
 POST | /api/v1/offices/ | Create an office 
 PUT | /api/v1/offices/:officeid/ | update the office 
 DELETE | /api/v1/offices/:officeid/| Delete the Office 
 DELETE | /api/v1/parties/:partyid/| Delete a party 
 GET | /api/v1/parties/|View all  parties
 GET | /api/v1/offices/|View all offices
 POST | /api/v1//votes/ | vote for a candidate 
 GET | /api/v1/office/:officeid/result | view All results from the voting made 
 GET | /api/v1/candidates| view All all candidates
 POST | /api/v1//petition/ | create a petition

## Setup
  1. Clone the repository
     ```git clone https://github.com/horix7/politico.git```
     
  2. Install dependencies
  
     ```npm install```
     
  3. Start the server
  
     ```npm start```
   3. Start the development server
  
    ```npm run dev```
  
  4. Use Postman to test api on ```localhost:5000```

## Prerequisites
  * Node
  * Postman
  
 ## Testing
 To run the application test run the following command in terminal
 
 ```npm test```

## Author

[Mahoro Jean Paul](https://github.com/horix7)
