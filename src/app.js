const express = require("express");
const aiRoutes  = require("./routes/ai.routes")
const historyRoutes = require("./routes/history.routes");
const cors = require("cors")

const dbConnection = require("../config/db")


const app = express()

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world")
})


app.use("/ai",aiRoutes)
app.use("/history", historyRoutes);

module.exports =app;