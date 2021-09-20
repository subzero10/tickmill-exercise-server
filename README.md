# Tickmill Interview Exercise (React)

## Notes
- This repository is the server side implementation of the exercise. The client is available [here](https://github.com/subzero10/tickmill-exercise-client).
- This backend implementation came already complete, with:
  - a database schema on postgres using typeorm,
  - a web server framework using nestjs
  - a /users endpoint with pagination to be consumed by the client app
- The app is hosted on heroku and uses the `heroku/nodejs` buildpack (default from heroku).

## Start the app
- `npm i`
- `npm start:dev`

## Deploy on heroku
- Create a new app on heroku.
- In Deploy tab, connect github repository.
- Choose branch and click on Deploy or enable automatic deployment.
- That's it! Heroku will run `npm run build` to transpile Typescript and `npm run start:prod` to start the server.
