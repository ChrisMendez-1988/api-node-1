const workOutService = require("../service/workOutService");

const getAllWorkOuts = (req, res) => {
  const allWorkOuts = workOutService.getAllWorkOuts(req.params.workOutId);
  res.send(`Get workout ${req.params.workOutId}`);
};

const getOneWorkOut = (req, res) => {
  const workOut = workOutService.getOneWorkOut();
  res.send(`Get workout ${req.params.workOutId}`);
};

const createNewWorkOut = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainersTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainersTips: body.trainersTips,
  };
  const createdWorkOut = workOutService.createNewWorkOut(newWorkout);
  res.status(201).send({ status: "ok", data: createdWorkOut });
};

const updateWorkOut = (req, res) => {
  const updatedWorkOut = workOutService.UpdateWorkOut();
  res.send(`Update workout ${req.params.workOutId}`);
};

const deleteWorkOut = (req, res) => {
  workOutService.deleteWorkOut();
  res.send(`Delete workout ${req.params.workOutId}`);
};

module.exports = {
  getAllWorkOuts,
  getOneWorkOut,
  createNewWorkOut,
  updateWorkOut,
  deleteWorkOut,
};
