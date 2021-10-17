//création serveur avec express
const express = require("express");
const app = express();



//apporter les routes
const client = require("./routes/client");
const fournisseur = require("./routes/fournisseur");


//exécuter les fonctions associé a chaque routes
app.get('/client' ,client); 
app.get('/fournisseur' ,fournisseur); 

//port d'écoute
const port =8080 ;
app.listen(port);

