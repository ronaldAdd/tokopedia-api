const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
require('dotenv').config();
const port = 5001;                  //Save the port number where your server will be listening



//route files
const productsRoute = require('./routes/Product');

//database
require('./configs/mongodb');


const bodyParser = require('body-parser');
app.set("view engine", "ejs");
app.use(bodyParser.json());

//Routes
app.use('/products',productsRoute);


//server
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});