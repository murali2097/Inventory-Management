const express = require("express");
const router = express.Router();
const createUser = require("./controller/authcontroller");
const createOrder = require("./model/createOrder");
const savedOrder= require("./model/savedOrder ")

const Handler = (req, res, next) => {
  res.json({
    status: "success",
    data: req.body,
  });
};
router.post("/auth/signup", );
router.post("/createorder", (req,res) =>{
  createOrder.saveData(req.body,(err, data) =>{
    res.send(data);
  })
});
router.post("/savedorder", (req, res) => {
  savedOrder.saveData(req.body, (err, data) => {
    res.send(data);
  })
})
module.exports = router;
