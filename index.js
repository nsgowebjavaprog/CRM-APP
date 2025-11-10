const express = require("express");
const app = express();
require('dotenv').config();


const PORT = process.env.PORT || 5000
console.log(process.env.PORT);
app.listen(PORT, () =>{
    console.log(`Server Was Started @ Port Number: ${PORT}`)
});

// 1. Logic for Express Server
// 2. Connection b/w DB and Logic
// 3. Route Layers