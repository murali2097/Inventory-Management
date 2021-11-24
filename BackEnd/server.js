const express =require('express');
const cors =require('cors');
const admin = require("firebase-admin");
const { initializeApp } = require('firebase-admin/app');
const serviceAccount = require('./serviceAccount.json');

const app = express();
app.use(express.json());
app.use(cors());

//Initialize the SDK 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inventorymanagement-3ddf6..firebaseio.com",
});
//creatuser
const createUser = async (req, res) => {
const {
      email,
      phoneNumber,
      
    } = req.body;

    const user = await admin.auth().createUser({
      email,
      phoneNumber,
      
    });

    return res.send(user);
}
//middleware
const getAuthToken = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
  next();
};
const checkIfAuthenticated = (req, res, next) => {
 getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      const userInfo = await admin
        .auth()
        .verifyIdToken(authToken);
      req.authId = userInfo.uid;
      return next();
    } catch (e) {
      return res
        .status(401)
        .send({ error: 'You are not authorized to make this request' });
    }
  });
};
//api

app.post("http://localhost:8080/auth/signup", createUser);

//get request in server
app.get("/", (req, res) => {
  res.send("hello World");
});
//importing routes




//setting up server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at :${PORT}`);
});
