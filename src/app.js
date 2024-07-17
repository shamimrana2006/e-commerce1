const express = require("express")
const app = express()

app.get("/",(r,rs)=>{
rs.send("succesfull")
})

app.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000")
})