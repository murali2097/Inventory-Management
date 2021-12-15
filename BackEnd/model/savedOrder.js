const admin = require("firebase-admin");
const firebaseService = require("../firebase-service");

module.exports = {
  saveData: function (req, callback) {
    firebaseService.database().ref("savedorders/").set({
      employeeID: req.employeeID,
      department: req.department,
      productName: req.productName,
      CASNumber: req.CASNumber,
      brand: req.brand,
      catalogueNumber: req.catalogueNumber,
      packSize: req.packSize,
      orderQuantity: req.orderQuantity,
      productType: req.productType,
    });
    callback(null, { message: "order have be saved" });
  },
};
