const {candidates} = require('../db/model')

async function createCandidate(cName,cPhone,cEmail){
    const createCandidate = await candidates.create({
        
        name:cName,
        phone:cPhone,
        email:cEmail
    })
    const theId = createCandidate.dataValues.id
    return theId
}
module.exports = {createCandidate}