const express = require('express')
const cors = require('cors') 
const app = express()
app.use(cors())
const port = 3000
var pass = [{login:"test",password:"test"}]
app.get("/log-in/:username/:password",function(req,res){
    const username = req.params.username
    const password = req.params.password
    console.log(pass.length)
    for(var i=0;i<pass.length;i++){
        if(pass[i].login==username && pass[i].password == password){
            res.send([{status:"logged in"}])
            console.log("logged in")
        }
        /*else{
            res.send([{status:"wrong password or username"}])
        }*/
    }
})
app.get("/addaccount/:username/:password",function(req,res){
    const username = req.params.username
    const password = req.params.password
    pass.push({login:username,password:password})
    console.log("account added")
    res.send("added")
    console.log(pass)
})


app.listen(port)