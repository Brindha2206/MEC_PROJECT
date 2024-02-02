const express = require("express")
const route = express.Router()
const base = require("./db")

route.get('/list',async(req,res)=>{
    const sql = `select * from data_sesta_students_techtalks1`
    base.query(sql,(err,records)=>{
        if(err){
            res.status(500).json({"error":err.message})
            return
        }
        if(records.length==0){
            res.status(201).json({"error":"No records found"})  
            return
        }
        res.status(200).json({records})
    })
})


//post mapping

route.post('/techtalks1Add',async(req,res)=>{
    const {
        academic_year, 
        sem_id, 
        department_id, 
        date, 
        title_of_the_event, 
        name_of_the_student, 
        year, 
        semester, 
        section, 
        no_of_beneficiaries
  } = req.body
    const sql = "insert into data_sesta_students_techtalks1(academic_year, sem_id, department_id, date, title_of_the_event, name_of_the_student, year, semester, section, no_of_beneficiaries)values (?,?,?,?,?,?,?,?,?,?)"
    
    base.query(sql,[ academic_year, 
        sem_id, 
        department_id, 
        date, 
        title_of_the_event, 
        name_of_the_student, 
        year, 
        semester, 
        section, 
        no_of_beneficiaries],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).json({"error":err.message})
            return
        }
        res.status(200).json({"message":"Nptel Proposal Sent Successfully"})
    })
})

module.exports=route