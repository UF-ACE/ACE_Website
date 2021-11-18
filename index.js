const express = require('express')
const cors = require('cors')
const path = require('path')

const db = require('./server/db/index')
const videoRouter = require('./server/routes/video-router')
const personRouter = require('./server/routes/person-router')    
const sponsorRouter = require('./server/routes/sponsor-router')
const tagRouter = require('./server/routes/sponsor-router')

const app = express()
const apiPort = 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', videoRouter)
app.use('/api', personRouter)
app.use('/api', sponsorRouter)
app.use('/api', tagRouter)

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})