const {candidates} = require('../db/model')

async function createCandidate(cName,cEmail){
    const createCandidate = await candidates.create({
        
        name:cName,
        email:cEmail
    })
    const theId = createCandidate.dataValues.id
    return theId
}
module.exports = {createCandidate}