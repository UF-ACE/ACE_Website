const express = require('express')
const cors = require('cors')

const db = require('./db/index')
const videoRouter = require('./routes/video-router')
const personRouter = require('./routes/person-router')    
const sponsorRouter = require('./routes/sponsor-router')

const app = express()
const apiPort = 3000

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', videoRouter)
app.use('/api', personRouter)
app.use('/api', sponsorRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))