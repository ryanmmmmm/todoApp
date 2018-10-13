# todoApp

Sample Express REST API

## Goals
* Show understanding of Javascript
* Timeboxed exercise at 3 to 3.5 hours to show velocity
* Show understanding of express structure
* show composable authentication layer
* show ability to test a model function
* show understanding of other REST method basic setup even tho not implemented. PUT/DELETE/CREATE
* Show I know how to use git and github

## Assumptions

*Since this was timeboxed interview exercise, I made sure to only implement a few REST APIs with hardcoded data

*Basic auth is used to show pluggable auth but is only moderately secure under https://. It is NO
T secure under http://


## TODOs
* need to finish remaining delete/edit/add REST APIs
* Add persistent store
* Quick and dirty console log is left in for debuggign, a more robust logging framework should be used in the future.
* Tests need to check failure cases such as invalid Id passed in, invalid data types. Due to timebox I left out that.

NOTE: These were not done to timebox this exercise.

## Downloading

Run this:

`git clone git@github.com:ryanmmmmm/todoApp.git`

cd into todoApp folder

## Running
Run this is project root folder:

`npm install`

On MacOS or Linux, run the app with this command:

`$ DEBUG=todoapp:* npm start`

On Windows, use this command:

`set DEBUG=todoapp:* & npm start`


Then run curl to test the two active endpoints.

Note: basic auth is ryan:password for username:password converted to basic auth token.

`curl -X GET \
  http://localhost:3000/todos \
  -H 'authorization: Basic cnlhbjpwYXNzd29yZA==' \
  -H 'cache-control: no-cache'`

`curl -X GET \
  http://localhost:3000/todos \
  -H 'authorization: Basic cnlhbjpwYXNzd29yZA==' \
  -H 'cache-control: no-cache'`

##Testing

Run this in the root folder:

`npm test`

