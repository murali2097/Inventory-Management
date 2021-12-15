const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
// const { initializeApp } = require("firebase-admin/app");
// const serviceAccount = require("./serviceAccount.json");
// const createUser = require('./controller/authcontroller')

const app = express();
app.use(express.json());
app.use(cors());

//Loading API ROUTES
const routes = require("./routes");
app.use("/", routes);

//get request in server
app.get("/", (req, res) => {
  res.send("hello World");
});

//setting up server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at :${PORT}`);
});











































































































































//creatuser
// const createUser = async (req, res) => {
//   const { email, phoneNumber } = req.body;

//   const user = await admin.auth().createUser({
//     email,
//     phoneNumber,
//   });

//   return res.send(user);
// };
//middleware
// const getAuthToken = (req, res, next) => {
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.split(" ")[0] === "Bearer"
//   ) {
//     req.authToken = req.headers.authorization.split(" ")[1];
//   } else {
//     req.authToken = null;
//   }
//   next();
// };
// const checkIfAuthenticated = (req, res, next) => {
//   getAuthToken(req, res, async () => {
//     try {
//       const { authToken } = req;
//       const userInfo = await admin.auth().verifyIdToken(authToken);
//       req.authId = userInfo.uid;
//       return next();
//     } catch (e) {
//       return res
//         .status(401)
//         .send({ error: "You are not authorized to make this request" });
//     }
//   });
// };
// api

// app.get("/auth/signup", createUser);
