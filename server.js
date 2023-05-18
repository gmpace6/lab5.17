const express = require('express')

const app = express()

// app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '2ece5a1c5eb94c68aff4dd9940c7fc3d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static(__dirname + '/public'))

app.listen(4000, () => {
    console.log('up on 4000')
})

rollbar.log('Notification.')
rollbar.info('Stuff is working.')
rollbar.warning('Brain is tired.')
rollbar.error('Laptop too slow.')
rollbar.critical('No more yogurt.')