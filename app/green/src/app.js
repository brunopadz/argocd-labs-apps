const express = require('express')
const app = express()

let version = 'green'

const server = app.listen(1337)

process.on('SIGTERM', () => {
    console.log('SIGTERM signal received')
    server.close(() => {
        console.log('HTTP server shutdown')
    })
})

app.get('/', (req, res) => {
    res.send('App running version: ' + version)
})
