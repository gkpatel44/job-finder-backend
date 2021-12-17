const express = require('express')
const datamodel = require('../model')
const route = express.Router()

route.get('/', (req, res) => {
    datamodel.find({}, (err, data) => {
        console.log("data fetched")
        res.send(data)
    })
})

route.post('/sortlist', (req, res) => {

    datamodel.find({ title: req.body.jobtitle, location: req.body.joblocation }, (err, data) => {
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            console.log("sortdata fetched", data.length);
            if (data.length > 0) {
                res.json(data)
            }else{
                res.status(404).json({status:404,msg:"user not found"})
            }
        }
    }
    )
})
module.exports = route


