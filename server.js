const express = require('express')

const app = express()

app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.listen(4001, () => {
    console.log('up on 4001')
})
