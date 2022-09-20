const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.listen(3001, () => {
   console.log("running server");
});

const db = mysql.createConnection({
   user: "root",
   host: "localhost",
   password: "1234",
   database: "pop",
});

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
   db.execute(
      "INSERT INTO usuarios  (username, nombre, apellido, correo, contrasenia) VALUES (?,?,?,?,?)",
      [username, nombre, apellido, correo, contrasenia],
      (err, result) => {
         console.log(err);
      }
   );
});

app.get("/getUserCorreo", (req, res)  => {
   const sqlSelect = "select username,correo from usuarios";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   });
});

app.get("/login", (req, res)  => {
   const sqlSelect = "select correo,contrasenia from usuarios";
   db.query(sqlSelect, (err, result) => {
      res.send(result);
   });
});
 
