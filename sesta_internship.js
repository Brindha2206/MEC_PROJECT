const express = require("express")
const route = express.Router()
const base = require("./db")

route.get('/list',async(req,res)=>{
    const sql = "select * from data_sesta_internship"
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

route.post('/internAdd',async(req,res)=>{
    const {
        name_of_the_contact_person, 
        phone_numberr_of_contact_person, 
        email_id_of_contact_person,
        website_of_the_organization, 
        outcome_of_the_activity, 
        certificate_pdf
  } = req.body
    const sql = "insert into data_sesta_internship (name_of_the_contact_person, phone_numberr_of_contact_person, email_id_of_contact_person, website_of_the_organization, outcome_of_the_activity, certificate_pdf)values (?,?,?,?,?,?)"
    
    base.query(sql,[ name_of_the_contact_person, 
        phone_numberr_of_contact_person, 
        email_id_of_contact_person,
        website_of_the_organization, 
        outcome_of_the_activity, 
        certificate_pdf],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).json({"error":err.message})
            return
        }
        res.status(200).json({"message":"Nptel Proposal Sent Successfully"})
    })
})



module.exports=route