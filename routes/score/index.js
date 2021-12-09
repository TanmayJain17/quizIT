const route = require('express').Router()
const ExcelJS = require('exceljs')
const {theScores} = require('../../controller/findScore')
const {createScoreSheet} = require('../../controller/createScore')

const answers=['Agree','Agree','Disagree','Agree','Disagree','Agree','Disagree','Disagree','Disagree','Agree','Disagree','Agree','Agree','Disagree','Agree','Agree', 'Disagree','Disagree','Agree','Agree','Agree','Agree']

route.post('/',async (req, res)=>{
    //const {data} = req.body
    //console.log(req.body)
    //console.log(req.body)
    /* const {data} = req.body */
    const arr = req.body.result
    const id =req.body.userid
    console.log(arr)
    console.log(id)
    var totalScore=0;
    let marks=[]

    for(let i=0;i<22;i++){
        if(arr[i].a===answers[i]){
            marks.push(1)
            totalScore=totalScore+1;
        }
        else{
            marks.push(0)
        }
    }
    /* const scores = await theScores()
    //console.log(scores[0].dataValues)
    
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('AllScores')
    worksheet.columns = [
        { header: 'Id', key: 'id', width: 2 },
        {header: 'Q1', key: 'q1marks', width: 5},
        {header: 'Q2', key: 'q2marks', width: 5},
        {header: 'Q3', key: 'q3marks', width: 5},
        {header: 'Q4', key: 'q4marks', width: 5},
        {header: 'Q5', key: 'q5marks', width: 5},
        {header: 'Q6', key: 'q6marks', width: 5},
        {header: 'Q7', key: 'q7marks', width: 5},
        {header: 'Q8', key: 'q8marks', width: 5},
        {header: 'Q9', key: 'q9marks', width: 5},
        {header: 'Q10', key: 'q10marks', width: 5},
        {header: 'Q11', key: 'q11marks', width: 5},
        {header: 'Q12', key: 'q12marks', width: 5},
        {header: 'Q13', key: 'q13marks', width: 5},
        {header: 'Q14', key: 'q14marks', width: 5},
        {header: 'Q15', key: 'q15marks', width: 5},
        {header: 'Q16', key: 'q16marks', width: 5},
        {header: 'Q17', key: 'q17marks', width: 5},
        {header: 'Q18', key: 'q18marks', width: 5},
        {header: 'Q19', key: 'q19marks', width: 5},
        {header: 'Q20', key: 'q20marks', width: 5},
        {header: 'Q21', key: 'q21marks', width: 5},
        {header: 'Q22', key: 'q22marks', width: 5},
        {header: 'Q23', key: 'q23marks', width: 5},
        {header: 'Q24', key: 'q24marks', width: 5},
        {header: 'Q25', key: 'q25marks', width: 5},
        {header: 'Q26', key: 'q26marks', width: 5},
        {header: 'Q27', key: 'q27marks', width: 5},
        {header: 'Q28', key: 'q28marks', width: 5},
        {header: 'Q29', key: 'q29marks', width: 5},
        {header: 'Q30', key: 'q30marks', width: 5},
        {header: 'Q31', key: 'q31marks', width: 5},
        {header: 'Q32', key: 'q32marks', width: 5},
        {header:'Total',key:'total',width:10}
    ]
    
        //worksheet.columns.push({header: `Q${k+1}`, key: `q${k+1}`, width: 5})
    
    //worksheet.columns.push({header:'Total',key:'total',width:15})

    for(let t=0;t<scores.length;t++){
        
        worksheet.addRow(scores[t].dataValues)
    }
    worksheet.getRow(1).eachCell((cell)=>{
        cell.font = {bold:true,italic:true}
    }) 
    const score = await workbook.xlsx.writeFile('scores.xlsx') */
    console.log(arr)
    console.log(marks)
    console.log(totalScore)

    const theScore = createScoreSheet(marks,totalScore,id)
    if(totalScore>=5){
        res.status(201).send({message:"You are in direction and good fit to become Business Analyst!"})
    }
    else{
        res.status(201).send({message:"Thank you for taking the test!"}) 
    }
    //res.status(201).redirect('/findall')
    //res.status(201).send('ok')
})

module.exports = route