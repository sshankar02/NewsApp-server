const {APP_PORT, APP_KEY} = require('./serverConfig');
const app = require('./app')

// start the app and listen to specified port.
const server = app(APP_KEY);
server.listen(APP_PORT, ()=>{
        console.log("listening on port : " + APP_PORT);
    })

module.exports = server;