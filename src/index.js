const express = require("express");
const v1workOutRouter = require("./v1/routes/workOutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/workouts", v1workOutRouter);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
