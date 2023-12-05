const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5003;
db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
})
db.connect((error) => {
  if (error) {
    console.error('Erreur de connexion à la base de données :', error);
    return;
  }
  console.log('Connexion à la base de données réussie !');
  // Vous pouvez exécuter d'autres opérations sur la base de données ici
  // ...
  // N'oubliez pas de fermer la connexion lorsque vous avez terminé
});

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
  return res.send("je suis la mes amis")
})
app.get("/users",(req,res)=>{
  db.query('select * from students',[],(err,result)=>{
    return res.json(result)
  })
  
})
app.post("/create", (req, res) => {
  console.log("je suis la en post")
  console.log(req.body.firstname)
  const {firstname,lastname,age}= req.body
  const sql = `INSERT INTO students(firstname,lastname,age) values ("${firstname}","${lastname}",${age})`;
  const items = [firstname,lastname,age];
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json({"message":"creation effectuée"});
  });
});

app.listen(port,()=>console.log(`server is runing on por ${port}`))