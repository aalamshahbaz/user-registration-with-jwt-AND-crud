const express = require('express');
app = express();
const PORT = process.env.PORT || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(express.json())

// importing routes
var routes = require('./routes/userRoutes');
app.use('/',routes)


app.all('*',(req,res,next)=>{
res.send('wrong address')
})

// listen for requests

app.listen(PORT,()=>{
    console.log(`app is listening at http://localhost:${PORT}`)
})