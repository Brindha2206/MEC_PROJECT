const express = require("express")
const route = express.Router()
const base = require("./db")

route.get('/list',async(req,res)=>{
    const sql = "select * from data_sesta_nptel"
    base.query(sql,(err,records)=>{
        if(err){
            res.status(500).json({"error":err.message})
        }
        if(records.length==0){
            res.status(201).json({"error":"No records found"})  
        }
        res.status(200).json({records})
    })
})


//post mapping

route.post('/nptelAdd',async(req,res)=>{
    const {
        academic_year,
    sem_id,
    name_of_the_student,
    academic_year_of_the_student,
    semester_year,
    section,
    course_name,
    year,
    session,
    score_optained,
    certificate_type,
    certificate_pdf
  } = req.body
    const sql = "insert into data_sesta_nptel (academic_year, sem_id, name_of_the_student, academic_year_of_the_student, semester_year, section, course_name, year, session, score_optained, certificate_type, certificate_pdf )values (?,?,?,?,?,?,?,?,?,?,?,?)"
    //update mec_students set DOB=?, Age=? where id=?
    base.query(sql,[academic_year,
        sem_id,
        name_of_the_student,
        academic_year_of_the_student,
        semester_year,
        section,
        course_name,
        year,
        session,
        score_optained,
        certificate_type,
        certificate_pdf],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).json({"error":err.message})
            return
        }
        res.status(200).json({"message":"Nptel Proposal Sent Successfully"})
    })
})

route.put('/update/:report_id',async(req,res)=>{
    // const sno = req.params.s_no
    const{
    academic_year,
    sem_id,
    name_of_the_student,
    academic_year_of_the_student,
    semester_year,
    section,
    course_name,
    year,
    session,
    score_optained,
    certificate_type,
    certificate_pdf
    } = req.body
    const sql = "update data_sesta_nptel set academic_year=?, sem_id=?, name_of_the_student=?, academic_year_of_the_student=?, semester_year=?, section=?, course_name=?, year=?, session=?, score_optained=?, certificate_type=?, certificate_pdf=? where report_id=?"
    base.query(sql,[academic_year,
        sem_id,
        name_of_the_student,
        academic_year_of_the_student,
        semester_year,
        section,
        course_name,
        year,
        session,
        score_optained,
        certificate_type,
        certificate_pdf],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json({"error":err.message})
            return
        }
        res.status(200).json({"message":result.affectedRows})
    })
})

module.exports=route