# About App

This is a back end server api which fetched the news from newapi.org for UK (gb). It exposes two routes for the application - ['/', '/query/q].

## Technical overview

The app is built using node and express framework.

Application architecture and landscape description can be found [here](https://github.com/sshankar02/NewsApp-server/blob/main/docs/Architecture&Landscape.png).

# Starting the server

The api uses an api token in order to get data from the newsapi. This token needs to be set as environment variable while starting the app - _API_KEY_.
Navigate to project directory and use below command to start the server app in command prompt/terminal.

**For windows users**

`set API_KEY=<API_KEY> && npm start`

**For mac users**

`API_KEY=<API_KEY> npm start`

## Learn more -

newsapi.org - https://newsapi.org/
docs - https://newsapi.org/docs
