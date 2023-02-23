const express = require('express')
const cors = require('cors') 
const app = express()
app.use(cors())
const port = 3000
var pass = [{login:"test",password:"test"}]
app.get("/log-in/:username/:password",function(req,res){
    const username = req.params.username
    const password = req.params.password
    for(var i=0;i<pass.length;i++){
        if(pass[i].login==username && pass[i].password == password){
            res.send([{status:"logged in"}])
            console.log("logged in")
        }
        else{
            res.send("wrong password or username")
        }
    }
})


app.listen(port)