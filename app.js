const express = require("express");
const app = express();
require("./models/model");
const { addUser, crud } = require("./controller/userController");

app.get("/add", addUser);
app.get("/crud", crud);

app.listen(8000, () => {
    console.log("this site port number 6000");
});