const express = require("express")
const { rawListeners } = require("../models/bet.js")
const betRouter = express.Router()
const Bet = require("../models/bet.js")

betRouter.get("/", (req, res, next) => {
    Bet.find((err, bets) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bets)
    })
})
betRouter.post("/", (req, res, next) => {
    const newBet = new Bet(req.body)
    newBet.save((err, savedBet) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBet)
    })
})

module.exports = betRouter