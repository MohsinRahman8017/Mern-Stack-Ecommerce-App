
const express = require("express");
const app = express()
const {Connection} = require("./database/db")
const dotenv = require("dotenv").config()
const {UserRoutes} = require("./Routes/UserRoutes")
const {ProductRoutes} = require("./Routes/ProductsRoutes")
const path = require("path")

const cors = require("cors")

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.use((req,resp,next) => {
    console.log("HTTP METHOD " + req.method + " URL " + req.url);
    next()
})

app.use(cors())
app.use(express.json())
app.use("/Files",express.static("Files"))
app.use(express.urlencoded({extended:true}))
app.use("/",ProductRoutes)
app.use("/",UserRoutes)

Connection(username,password)


app.listen(8300)