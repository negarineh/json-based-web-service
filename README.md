## JSON-based web service
You'll post some JSON data to the URL you provide. The program filter that JSON data and return a few fields.

## Technical
- ES6 syntax
- Separated controllers, routers
- Test case for controller function
- Error handling for invalid JSON
- Deployed to heroku (https://json-based-web-service.herokuapp.com/)
- Heroku CD
- Github CI pipeline 

## Heroku deployment
Using commands for heroku CI/CD (staging, production):

- Login
    `$ heroku login` 

- Clone repository
    `heroku git:clone -a json-based-web-service`

- Deploy changes
    `git add .`
    `git commit -am "new changes"`
    `git push heroku master`

## Available Scripts

In the project directory(`json-based-web-service/`), you can run:

### `npm install`

Installing dependencies required for running the app

### `npm run watch:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The app will restart if you make changes.\

### `npm test`

Launches the test runner.\

### `npm run start`

Builds the app for production.\
