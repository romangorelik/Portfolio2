const express = require('express')

let app = express()

app.use(express.static(__dirname + '/client/dist/'))

app.listen(4080, () => {console.log('Listening to port 4080!')})