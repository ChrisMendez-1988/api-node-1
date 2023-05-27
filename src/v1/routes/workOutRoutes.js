const express = require("express");
const router = express.Router();
const workOutController = require("../../controller/workOutController");

router
  .get("/", workOutController.getAllWorkOuts)

  .get("/:workOutId", workOutController.getOneWorkOut)

  .post("/", workOutController.createNewWorkOut)

  .patch("/:workOutId", workOutController.updateWorkOut)

  .delete("/:workOutId", workOutController.deleteWorkOut);

module.exports = router;
