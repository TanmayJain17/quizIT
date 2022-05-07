const route = require('express').Router()
const ExcelJS = require('exceljs')
const {theScores} = require('../../controller/findScore')
const path = require('path')
//const {tempfile} = require('tempfile')
//import tempfile from 'tempfile';

route.get('/', async (req, res)=>{
    console.log(req.headers)
    //console.log(res.headers)
    const scores = await theScores()
    /* const options = {
        root:path.join('../../')
    }
    //console.log(scores[0].dataValues)
    res.sendFile('scores.xlsx',options) */
    
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('AllScores')
    worksheet.columns = [
        { header: 'Id', key: 'id', width: 2 },
        {header: 'Name', key: 'name', width: 25},
        {header: 'EmailId', key: 'email', width: 45},
        {header: 'Phone No.', key: 'phone', width: 25},
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
        
        {header:'Total',key:'total',width:10}
    ]
    
        

    for(let t=0;t<scores.length;t++){
        
        worksheet.addRow(scores[t].dataValues)
    }
    worksheet.getRow(1).eachCell((cell)=>{
        cell.font = {bold:true,italic:true}
    }) 
    console.log('here is the error')
    
        
    const score =await workbook.xlsx.writeFile('scores.xlsx')
    console.log('score',score)
    const options = {
        root:path.join('./')
    }
    setTimeout(()=>{
        res.sendFile('scores.xlsx',options)
    },3000)
    //console.log(scores[0].dataValues)
    
    
    
})
module.exports=route