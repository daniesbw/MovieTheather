const mysql = require("mysql2");

const {createPool, createPoolCluster} = require('mysql2/promise.js')
const express = require("express");
const app = express();
const cors = require("cors");
const Pool = require("mysql2/typings/mysql/lib/Pool");

app.use(express.json());
app.listen(3001, () => {
   console.log("running server");
});

const pool = mysql.createPool({
   host: "us-cdbr-east-06.cleardb.net",
   user: "b0923fcd87f435",
   password: "4ead7401",
   database: "heroku_b15f6f225bde9fd",
})


app.use(
   cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
   })
);


app.post("/register", (req, res) => {
   const nombre = req.body.nombre;
   const apellido = req.body.apellido;
   const username = req.body.username;
   const correo = req.body.correo;
   const contrasenia = req.body.password;
   pool.execute(
      "INSERT INTO usuarios  (username, nombre, apellido, correo, contrasenia) VALUES (?,?,?,?,?)",
      [username, nombre, apellido, correo, contrasenia],
      (err, result) => {
         console.log(err);
      }
   );
});

app.get("/getUserCorreo", (req, res)  => {
   const sqlSelect = "select username,correo from usuarios";
   pool.query(sqlSelect, (err, result) => {
      res.send(result);
   });
});

app.get("/login", (req, res)  => {
   const sqlSelect = "select correo,contrasenia from usuarios";
   pool.query(sqlSelect, (err, result) => {
      res.send(result);
   });
});
 
