const express = require("express");
const dotenv = require("dotenv")
const results = require("./results")


dotenv.config();
const app = express();


//route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to my portal</h1>")
})

//get all results

app.get("/results", (req, res) => {
    res.json(results)
})


const PORT = process.env.PORT || 5001

app.listen(PORT, () => 
    console.log(`server is running on ${PORT}`)
)