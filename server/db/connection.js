const Sequelize = require('sequelize')

const db = new Sequelize({
    
    dialect:'sqlite',
    storage:__dirname + '/quizitdb.db'
})

const Model = Sequelize.Model

db.authenticate()
.then(()=>{
    console.log('authenticated')
})
.catch((err)=>{
    console.log(err)
})

module.exports ={db,Model}