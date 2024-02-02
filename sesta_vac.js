const express = require("express")
const route = express.Router()
const base = require("./db")

route.get('/list',async(req,res)=>{
    const sql = "select * from data_sesta_vac"
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

route.post('/vacAdd',async(req,res)=>{
    const {
        academic_year, 
        sem_id, 
        department_id, 
        name_of_the_value_added_course, 
        address_of_the_resource_person, 
        designation_id, 
        organization_of_resources_person, 
        mobile_of_resource_person, 
        email_id_of_rresource_person, 
        students_participated_in_the_event, 
        outcome_of_the_activity,
         ccr_first_page_pdf
  } = req.body
    const sql = "insert into data_sesta_vac (academic_year, sem_id, department_id, name_of_the_value_added_course, address_of_the_resource_person, designation_id, organization_of_resources_person, mobile_of_resource_person, email_id_of_rresource_person, students_participated_in_the_event, outcome_of_the_activity, ccr_first_page_pdf)values (?,?,?,?,?,?,?,?,?,?,?,?)"
    
    base.query(sql,[ academic_year, 
        sem_id, 
        department_id, 
        name_of_the_value_added_course, 
        address_of_the_resource_person, 
        designation_id, 
        organization_of_resources_person, 
        mobile_of_resource_person, 
        email_id_of_rresource_person, 
        students_participated_in_the_event, 
        outcome_of_the_activity,
         ccr_first_page_pdf],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).json({"error":err.message})
            return
        }
        res.status(200).json({"message":"Nptel Proposal Sent Successfully"})
    })
})



module.exports=route