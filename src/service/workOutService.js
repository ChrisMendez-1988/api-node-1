const { v4: uuid } = require("uuid");
const workOut = require("../db/workOut");

const getAllWorkOuts = () => {
  const allWorkOuts = workOut.getAllWorkOuts();
  return allWorkOuts;
};
const getOneWorkOut = () => {
  const oneWorkOut = workOut.getOneWorkOut();
  return oneWorkOut;
};
const createNewWorkOut = (newWorkOut) => {
  const workOutToInsert = {
    ...newWorkOut,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const createdWorkOut = workOut.createNewWorkOut(workOutToInsert);
  return createdWorkOut;
};

const updatedWorkOut = () => {
  return;
};

const deleteWorkOut = () => {
  return;
};

module.exports = {
  getAllWorkOuts,
  getOneWorkOut,
  createNewWorkOut,
  updatedWorkOut,
  deleteWorkOut,
};
