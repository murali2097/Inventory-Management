const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());

//get request in server
app.get('/', (req, res) => {
  res.send("hello World")
});


//setting up server
const PORT= 8080
app.listen(PORT, () => {
  console.log(`Server running at :${PORT}`);
});

//connecting Database
mongoose.connect(
  "mongodb+srv://Admin:admin123@inventorymanagement.rohsy.mongodb.net/Inventory?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Database = mongoose.connection;

// Check for Database connection
Database.once("open",  ()=> {
  console.log("Database Connected");
});
Database.on("err", ()=> {
  console.log(err);
});

//importing routes
const routes = require('../BackEnd/routes/routes')



































































































// const express =require ("express");
 //import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";



// const app = express();
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

//setting up server
// const PORT = 8080;
// app.listen(PORT, () => {
//   console.log(`Server running at :${PORT}`);
// });

//get request to display on browser
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.get('/api/courses', (req, res) => {
//   res.send([1, 2, 3]);
// })
// app.get("/api/courses/:id", (req, res) => {
//   res.send(req.params.id)
// })
// app.get("/api/posts/:year/:month", (req, res) => {
//   res.send(req.params)
// })
//connecting Database
// mongoose.connect(
//   "mongodb+srv://Admin:admin123@inventorymanagement.rohsy.mongodb.net/Inventory?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// import profileSchema from "./models/profileSchema";

// const db = mongoose.connection;
// // Check for DB connection
// db.once("open", function () {
//   console.log("Database Connected");
// });
// db.on("err", function () {
//   console.log(err);
// });

//profile model
// const profileSchema = new mongoose.Schema({
//   FirstName: {
//     type: String,
//     required: true,
//   },
//   LastName: {
//     type: String,
//     required: true,
//   },
//   EmployeeId: {
//     type: String,
//     required: true,
//   },
//   Designation: {
//     type: String,
//     required: true,
//   },
//   Email: {
//     type: String,
//     required: true,
//   },
//   Mobile: {
//     type: Number,
//     required: true,
//   },
//   ReportingTo: {
//     type: String,
//     required: true,
//   },
//   Wing: {
//     type: String,
//     required: true,
//   },

//   HQLocation: {
//     type: String,
//     required: true,
//   },
//   HQAddress: {
//     type: String,
//     required: true,
//   },
// });

// const Profile = new mongoose.model("Profile", profileSchema);

