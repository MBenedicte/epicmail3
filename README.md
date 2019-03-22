App logo

![EPIC MAIL](./images/logo&name1.png)

[![Maintainability](https://api.codeclimate.com/v1/badges/92ffb9070918248ca513/maintainability)](https://codeclimate.com/github/MBenedicte/EPICMail/maintainability)
[![Build Status]https://travis-ci.org/MBenedicte/epicmail3.svg?branch=develop)](https://travis-ci.org/MBenedicte/EPICMail)
[![Coverage Status](https://coveralls.io/repos/github/MBenedicte/EPICMail/badge.svg?branch=develop)](https://coveralls.io/github/MBenedicte/EPICMail?branch=develop)

![EPIC MAIL](./images/Epic_mail_landingp.png)

# EPICMail
A web app that helps people exchange messages/information over the internet.


# 1 . App Links

### [Gh-pages](https://mbenedicte.github.io/EPICMail/)

### [Server on heroku](https://epic-mail3.herokuapp.com/)


# 2 . Built with

 Front-end: HTML, CSS

Back-end: Nodejs, express

Database: Postgres



# 3 . Endpoints

 ### USER SIGN UP: 

 POST: /api/v2/auth/signup 

 ### USER LOGIN:  
 
 POST: /api/v2/auth/login

 ### SEND EMAIL
 
POST: /api/v2/message/:id

### ALL MAILS THE USER SENT

GET: /api/v2/messages/

### GET MAIL BY ITS ID

Delete: /api/v2/messages/:id

### CREATE A GROUP

POST: /api/v2/createGroup

### ALL GROUPS THE USER CREATED

GET: /api/v1/allGroups

### DELETE A GROUP

DELETE: /api/v1/deletegroup/:id


# 4. Clone the application from

[https://github.com/MBenedicte/EPICMail](https://github.com/MBenedicte/epicmail3)


# 5 . Commnands to run:

# server:

npm run dev 

# test: 
npm run test

# database: 

npm run database

# 6 . Author:

Benedicte Musabimana
