import express from "express";
const APP = express()

APP.get("/api/user", function (req, res) {
    res.send(["Dipali", "Abhishek", "Piyush","Kaaunyaa"]);
})

APP.post("/api/user/add", function (req, res) {
  res.send({"msg":"User added in DB"});
});

APP.put("/api/user/update", function (req, res) {
  res.send({ msg: "User update in DB" });
});

APP.delete("/api/user/delete", function (req, res) {
  res.send({ msg: "User delete in DB" });
});
APP.listen(4002, function () {
    console.log("Application Started");
})