const express = require('express') // import express
const router = express.Router() // create router
const Appointment = require('../models/appointment') // appointment model
const User = require('../models/user') // user model

// show all appointments for the logged-in user
router.get('/', async (req, res) => {
  const appointments = await Appointment.find({ user: req.user._id }).populate('user')
  res.render('appointments/index.ejs', { appointments })
})

// show form to create new appointment
router.get('/new', (req, res) => {
  res.render('appointments/new.ejs')
})

// show appointments for a specific user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const appointments = await Appointment.find({ user: userId }).populate('user')
  res.render('appointments/index.ejs', { appointments })
})

// create a new appointment
router.post('/', async (req, res) => {
  const { date, reason } = req.body

  const appointment = new Appointment({
    user: req.user._id, // link to logged-in user
    date,
    reason
  })

  await appointment.save()
  res.redirect('/appointments')
})

// show edit form for one appointment
router.get('/:id/edit', async (req, res) => {
  const appointment = await Appointment.findById(req.params.id).populate('user')
  res.render('appointments/edit.ejs', { appointment })
})

// update an appointment
router.put('/:id', async (req, res) => {
  const { date, reason } = req.body

  await Appointment.findByIdAndUpdate(req.params.id, {
    date,
    reason
  })

  res.redirect('/appointments')
})

// delete an appointment
router.delete('/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id)
  res.redirect('/appointments')
})

module.exports = router // export router
