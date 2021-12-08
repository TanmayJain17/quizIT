const route = require('express').Router()
const {createCandidate} = require('../../controller/enterCandidate')

route.post('/',async (req, res) => {
    const {data} = req.body
    if(data.theName===' '||data.emailId===' '){
        res.status(200).send({
            message:'Need all details to proceed '
        })
    }
    else{
        const theCandidate =await createCandidate(data.theName,data.emailId)
        console.log(theCandidate)
        res.status(201).send({id:theCandidate})
    }
})

module.exports = route
