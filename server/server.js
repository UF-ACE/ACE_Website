const express = require('express')
const cors = require('cors')
var favicon = require('serve-favicon');
const path = require('path')

const db = require('./db/db')
const videoRouter = require('./routes/video-router')
const personRouter = require('./routes/person-router')    
const sponsorRouter = require('./routes/sponsor-router')
//const emailRouter = require('./server/routes/email-router')
const loginRouter = require('./routes/login-router')
const registerRouter = require('./routes/login-router')
const tokenRouter = require('./routes/token-router')
const announcementRouter = require('./routes/announcement-router')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', videoRouter)
app.use('/api', personRouter)
app.use('/api', sponsorRouter)
//app.use('/api', emailRouter)
app.use('/api', loginRouter)
app.use('/api', registerRouter)
app.use('/api', tokenRouter)
app.use('/api', announcementRouter)

app.use(express.static(path.join(__dirname, '../client/build')))
app.use(favicon(path.join(__dirname, '../client/build', 'favicon.ico'))); 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../client/build/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})