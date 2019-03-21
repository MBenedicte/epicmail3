App logo

![EPIC MAIL](UI/IMAGES/logo&name1.png)

[![Maintainability](https://api.codeclimate.com/v1/badges/92ffb9070918248ca513/maintainability)](https://codeclimate.com/github/MBenedicte/EPICMail/maintainability)
[![Build Status](https://travis-ci.org/MBenedicte/EPICMail.svg?branch=develop)](https://travis-ci.org/MBenedicte/EPICMail)
[![Coverage Status](https://coveralls.io/repos/github/MBenedicte/EPICMail/badge.svg?branch=develop)](https://coveralls.io/github/MBenedicte/EPICMail?branch=develop)

![EPIC MAIL](UI/IMAGES/Epic_mail_landingp.png)

# EPICMail
A web app that helps people exchange messages/information over the internet.


# 1 . App Links

### [Gh-pages](https://mbenedicte.github.io/EPICMail/)

### [Server on heroku](https://epicmail-vi.herokuapp.com/)


# 2 . Built with

 Front-end: HTML, CSS

Back-end: Nodejs, express

Database: Postgres



# 3 . Endpoints

 ### Get all received mails: 

 Get: /api/v1/messages 

 ### Get all sent mails: Get: 
 
 Get: /api/v1/messages/sent

 ### Get all unread mails:
 
Get: /api/v1/messges/unread

### Get mail by its id

Get: /api/v1/messages/:id

### Delete mail

Delete: /api/v1/messages/:id

### Register a user

Post: /api/v1/auth/signup

### User login

Post: /api/v1/auth/login

### Display all users

Get: /api/v1/users


# 4. Clone the application from

[https://github.com/MBenedicte/EPICMail](https://github.com/MBenedicte/EPICMail)


# 5 . Commnands to run:

# server:

npm run dev 

# test: 
npm run test

# database: 

npm run database

# 6 . Author:

Benedicte Musabimana
