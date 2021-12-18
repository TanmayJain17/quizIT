const {db,Model} = require('./connection.js')
const {DataTypes} = require('sequelize')

const COL_ID_DEF = {
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
}
class candidates extends Model { }
candidates.init({
    id: COL_ID_DEF,
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
    
}, { sequelize: db, modelName: 'candidates' })

class scoreSheet extends Model{}
scoreSheet.init({
    /* id:COL_ID_DEF, */
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    
    q1marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q2marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q3marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q4marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q5marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q6marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q7marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q8marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q9marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    
    q10marks:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    total:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
},{ sequelize: db, modelName: 'scoresheet' })

candidates.hasOne(scoreSheet)
scoreSheet.belongsTo(candidates)

module.exports = {
    db,
    Model,
    candidates,
    scoreSheet
}


