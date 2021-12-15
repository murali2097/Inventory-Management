const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

//Initialize the SDK
module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://inventorymanagement-3ddf6..firebaseio.com",
});

// The app only has access as defined in the Security Rules
const db = admin.database();
const ref = db.ref("/some_resource");
ref.once("value", function (snapshot) {
  console.log(snapshot.val("database"));
});
