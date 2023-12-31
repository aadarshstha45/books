require('dotenv').config();

const express = require('express');
const router = require('./router')
const app = express();

app.use(express.json());
app.use(router);

const port = 4000;


app.listen(port, ()=>{
    console.log(`Running on port ${port}`);
})

