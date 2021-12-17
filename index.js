const express = require('express')
const bodyParser = require('body-parser')
const Routes = require('./src/routes/Router')
const cors = require('cors')
const app = express()
require('./src/server')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api',Routes)


app.listen(8080,()=>{console.log("server runnig on http://localhost:8080/")})