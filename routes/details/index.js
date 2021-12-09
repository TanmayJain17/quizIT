const route = require('express').Router()
const {createCandidate} = require('../../controller/enterCandidate')
const { check, validationResult } = require('express-validator');

route.post('/' ,[
    check('theEmail', 'Enter Correct Email')
                    .isEmail().isLength({ min: 5, max: 30 }),
    check('theName', 'Name length should be minimum 3 characters')
                    .isLength({ min: 3, max: 70 }),
    check('thePhone', 'Mobile number should contains 10 digits')
                    .isLength({ min: 10, max: 10 }),
    
],async (req, res) => {
    const {data} = req.body
    //let num = parseInt(data.thePhone)
    /* if(data.theName===' '||!(body(data.emailId).isEmail())||!(body(data.phone).isLength({ min: 10,max:10 }))){
        res.status(200).send({
            message:'Need all details to proceed '
        })
    } */
    /* console.log(req.body)
    res.send('ok') */
    
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.errors[0].msg)
      return res.status(201).send({message:errors.errors[0].msg });
    }
    else{
        const number = parseInt(req.body.thePhone)
        const name = req.body.theName
        const email = req.body.theEmail
        console.log(number)
        console.log(typeof(number))
        const theCandidate =await createCandidate(name,number,email)
        console.log(theCandidate)
        /* res.status(201).send({message:"details are good go ahead"}) */
        res.status(201).send({id:theCandidate})
    }
})

module.exports = route
