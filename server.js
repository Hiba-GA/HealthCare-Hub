require('dotenv').config() // load environment variables
require('./config/database.js') // connect to database

const express = require('express')
const path = require('path')

const app = express()

// Sessions setup
const session = require('express-session')
const { MongoStore } = require('connect-mongo')

// Middleware imports
const methodOverride = require('method-override')
const morgan = require('morgan')
const passUserToView = require('./middleware/pass-user-to-view.js')
const isSignedIn = require('./middleware/is-signed-in')

// Controllers
const authCtrl = require('./controllers/auth')
const appointmentCtrl = require('./controllers/appointments.js')

// Set port from env or default
const port = process.env.PORT ? process.env.PORT : '3000'

app.use(express.static(path.join(__dirname, 'public'))) // serve static files
app.use(express.urlencoded({ extended: false })) // parse form data
app.use(methodOverride('_method')) // support PUT and DELETE
app.use(morgan('dev')) // request logger

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET, // session secret key
    resave: false, // do not resave unchanged sessions
    saveUninitialized: true, // save new sessions
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI // store sessions in MongoDB
    })
  })
)

app.use(passUserToView) // pass user data to all views

// ---------- PUBLIC ROUTES ----------
app.get('/', async (req, res) => {
  res.render('index.ejs') // render home page
})

app.use('/auth', authCtrl) // authentication routes

// ---------- PROTECTED ROUTES ----------
app.use(isSignedIn) // protect routes below
app.use('/appointments', appointmentCtrl) // appointment routes

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`) // server start message
})