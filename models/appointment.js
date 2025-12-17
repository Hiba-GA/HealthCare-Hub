const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    date: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: false
    },
  },
  {
    timestamps: true,
  }
);

const appointments = mongoose.model('appointments', appointmentSchema);

module.exports = appointments;

