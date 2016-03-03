# Firebasics Chat

This repo contains example of writing a simple chat app with Firebase. The files
are served out of `public/` with a tiny NodeJS server, but they are static, so
they could be served by any HTTP server.

## Installation

 - Clone this repo `git clone git@github.com:yycruby/firebasics-chat.git`
 - Install server dependencies `npm install`

## Running the Examples

You can start the server with `npm start`.

To run the examples you will need to sign up with
[Firebase](https://firebase.com) and create an app. Next you need to copy the
Firebase URL into the examples. You can change them all at once with the `setup`
script: `./setup <APP_NAME>`

The basic example is at
[http://localhost:3000/basic-example.html](http://localhost:3000/basic-example.html)

The auth example requires you to enable GitHub and Anonymous auth for your
Firebase app.  The auth example is at
[http://localhost:3000/auth-example.html](http://localhost:3000/auth-example.html)

Finally, you can use the `publisher.html` and `subscriber.html` examples to
experiment with querying.

## Deploying the App

To deploy the app you can set your app name in `firebase.json` and run `firebase
deploy`. The output will include the URL for your app.
