const {scoreSheet} = require('../db/model')
const {candidates} = require('../db/model')

async function createScoreSheet(arrMarks,totalMarks,id){
    const theCan = await candidates.findOne({
        where:{
            id:id
        }
    })
    const theSheet = await scoreSheet.create({
        name:theCan.dataValues.name,
        email:theCan.dataValues.email,
        phone:theCan.dataValues.phone,
        q1marks:arrMarks[0],
        q2marks:arrMarks[1],
        q3marks:arrMarks[2],
        q4marks:arrMarks[3],
        q5marks:arrMarks[4],
        q6marks:arrMarks[5],
        q7marks:arrMarks[6],
        q8marks:arrMarks[7],
        q9marks:arrMarks[8],
        q10marks:arrMarks[9],
        
        total:totalMarks
    })
    return theSheet
}

module.exports = {createScoreSheet}