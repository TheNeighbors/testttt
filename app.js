const express = require('express');
const morgan = require('morgan')
const path = require('path');
// const debug = require('debug')('app');
const app = express();
const host = 'localhost';
const port = 3000;


app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'/public/')))

app.get("/", (req, res) => {
    res.send("Devskill...")
})


app.listen(port, () => {
   console.log('Server Ready on PORT : ' + port)
})


