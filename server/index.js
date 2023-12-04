const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5002;
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
    console.log(result)
    return res.json(result)
  })
  
})

app.listen(port,()=>console.log("server is runing...."))