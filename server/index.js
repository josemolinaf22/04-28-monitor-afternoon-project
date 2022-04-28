const express = require('express');
const path = require('path')

const app = express()

app.use(express.json())

// this tyles other files together
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../styles.css'))
})


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'd8c2b5a52a21428da53c965bb5f5f053',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

//endpoit 

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const port = process.env.PORT || 4545
app.use(rollbar.errorHandler())

app.listen(port, ()=> console.log(`Listening on ${port}`))