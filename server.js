const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:/27017/bettingApp",
    {   usewNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => consoele.log("connected to the database"))

app.use("/bets", require("./routes/betRouter.js"))
app.use("/sports", require("./routes/sportsRouter.js"))

app.use((err, req, res, next) => {
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("successfully runnning on porty 9000")
})