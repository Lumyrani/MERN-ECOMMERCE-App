require ('dotenv').config()
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes.js')

connectDB();
//initializing express module into app variable app declaration
const app = express();

app.use(express.json());


//api
app.use('api/products',productRoutes)

// initializing if not PORT existing  || 5000 available
const PORT = process.env.PORT || 5000;

// App Listening
app.listen(PORT, ()=> console.log(`server running on port ${PORT}`))