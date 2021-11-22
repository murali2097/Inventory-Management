const mongoose = require("mongoose");
const { Schema } = mongoose;
//Here we are Creating userSchema
const profileSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  EmployeeId: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Mobile: {
    type: Number,
    required: true,
  },
  ReportingTo: {
    type: String,
    required: true,
  },
  Wing: {
    type: String,
    required: true,
  },
  HQLocation: {
    type: String,
    required: true,
  },
  HQAddress: {
    type: String,
    required: true,
  },
});

// In order to use our schema,we need to convert our userSchema into a Model.
// To do so, we pass it into mongoose.model(modelName, schema):
const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
