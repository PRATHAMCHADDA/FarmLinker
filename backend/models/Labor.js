const mongoose = require('mongoose');

const laborSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skills: { type: String, required: true },
  experience: { type: String, required: true },
  contact: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: String, required: true },
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }] // Reference to applied jobs
}, { timestamps: true });

const Labor = mongoose.model('Labor', laborSchema);
module.exports = Labor;