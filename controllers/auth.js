const express = require('express') // import express
const bcrypt = require('bcrypt') // import bcrypt for hashing

const router = express.Router() // create router
const User = require('../models/user') // user model

// show sign up form
router.get('/sign-up', async (req, res, next) => {
  res.render('auth/sign-up.ejs')
})

// sign out user and destroy session
router.get('/sign-out', async (req, res) => {
  try {
    req.session.destroy(() => {
      res.redirect('/')
    })
  } catch (error) {
    console.error(error)
    res.redirect('/')
  }
})

// handle sign up logic
router.post('/sign-up', async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body

    // check if username already exists
    const userInDatabase = await User.findOne({ username })
    if (userInDatabase) {
      return res.send('Username or Password is invalid')
    }

    // check if passwords match
    if (password !== confirmPassword) {
      return res.send('Username or Password is invalid')
    }

    // hash the password
    const hashPassword = bcrypt.hashSync(password, 10)

    // replace plain password with hashed one
    req.body.password = hashPassword
    delete req.body.confirmPassword

    // create new user
    const user = await User.create(req.body)

    // store user info in session
    req.session.user = {
      username: user.username,
      _id: user._id
    }

    req.session.save(() => {
      res.redirect('/')
    })
  } catch (error) {
    console.error(error)
    res.send('Something went wrong with registration!')
  }
})

// show sign in form
router.get('/sign-in', async (req, res) => {
  res.render('auth/sign-in.ejs')
})

// handle sign in logic
router.post('/sign-in', async (req, res) => {
  try {
    const { username, password } = req.body

    // find user by username
    const userInDatabase = await User.findOne({ username })
    if (!userInDatabase) {
      return res.send('Username or Password is invalid')
    }

    // compare passwords
    const isValidPassword = bcrypt.compareSync(password, userInDatabase.password)
    if (!isValidPassword) {
      return res.send('Username or Password is invalid')
    }

    // store user info in session
    req.session.user = {
      username: userInDatabase.username,
      _id: userInDatabase._id
    }

    req.session.save(() => {
      res.redirect('/')
    })
  } catch (error) {
    console.error(error)
    res.send('Something went wrong with Sign In')
  }
})

module.exports = router // export router
