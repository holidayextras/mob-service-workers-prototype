'use strict'

const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')

app.use(express.static('assets'))
app.listen(8080)
https.createServer({
  key: fs.readFileSync('./ssl/service-worker.holidayextras.co.uk.key'),
  cert: fs.readFileSync('./ssl/service-worker.holidayextras.co.uk.crt')
}, app).listen(8443)
