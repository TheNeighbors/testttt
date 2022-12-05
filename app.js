const express = require('express');
const morgan = require('morgan')
const path = require('path');
const debug = require('debug')('app');
const app = express();
const host = 'localhost';
const port = 3000;


app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public/')))

app.set("views", "./src/views")
app.set("view engine", "ejs")

app.get("/", (req, res) => {

    res.render('index', { username: 'ooooooooo' })
})


app.listen(port, () => {
    console.log('Server Ready on PORT : ' + port)
})


