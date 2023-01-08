const express = require('express')
const route = require('./routes')
const app = express()
const port = 4500
app.use(express.json())

app.use(route)

app.listen(port,()=>{
    console.log(`Listening at port http://localhost:${port}`)
})