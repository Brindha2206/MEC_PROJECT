const express= require('express')
const bodyparser=require('body-parser')
const database=require('./db')
const cors=require('cors')

const server=express.Router()
server.use(cors())
server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())

server.get('/list',async(req,res)=>{
    const query="select * from data_setaf_journal_publication "
    database.query(query,[req.params.user],(err,result)=>{
        if(err){
            res.status(404).json({error:err.message})
            return
        }
        if(result.length==0){
            res.status(500).json({message:"the value in not found in the table"})
            return
        }
        else{
            res.status(200).json(result)
        }
    })
})

server.post('/journalnewrecord',async(req,res)=>{
    const {
        academic_year,
        semester,
        department,	
        name_of_author,	
        title_of_paper,	
        name_of_journal,
        year_of_publication,
        month_of_publication,
        issn_number,
        volume_no,
        issue_no,
        page_no,
        journal_listed_in,
        link_to_website_of_journal,
        journal_first_pae_PDF	
    }=req.body
    const sql="insert into data_setaf_journal_publication values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    database.query(sql,[
        academic_year,
        semester,
        department,	
        name_of_author,	
        title_of_paper,	
        name_of_journal,
        year_of_publication,
        month_of_publication,
        issn_number,
        volume_no,
        issue_no,
        page_no,
        journal_listed_in,
        link_to_website_of_journal,
        journal_first_pae_PDF	

    ],(err,result)=>{
        if (err) {
            res.status(404).json({ "error": err.message })
            return
        }
        res.status(200).json(result)
    })
})

///////////////////conference publication and presentation//////////////////////////////

//post method
server.post('/conferencenewrecord',async(req,res)=>{
    const {academic_year,
        semester,
        department,
        name_of_the_authors,
        title_of_the_conference_paper,
        name_of_the_conference,
        place_of_the_conference,
        conference_type,
        date_of_conference,
        isbn_of_the_conference_proceeding,
        conference_certificate_and_proceeding_PDF
    }=req.body
    const sql="insert into data_setaf_conference_publication_and_presentations values (?,?,?,?,?,?,?,?,?,?,?);"
    database.query(sql,[academic_year,
        	semester,
            department,
            name_of_the_authors,
            title_of_the_conference_paper,
            name_of_the_conference,
            place_of_the_conference,
            conference_type,
            date_of_conference,
            isbn_of_the_conference_proceeding,
            conference_certificate_and_proceeding_PDF

    ],(err,result)=>{
        if (err) {
            res.status(404).json({ "error": err.message })
            return
        }
        res.status(200).json(result)
    })
})


/////////////////////////////////workshop//////////////////////////


server.post('/workshopnewrecord',async(req,res)=>{
    const {subtype,
        name_of_the_faculty,
        designation,
        nature_of_the_program,
        title_of_the_program,
        duration_from,
        duration_to,
        participation,
        name_of_the_organization_and_place,
        location_of_organization,
        amount_provided_by_the_HEI,
        Certificates_pdf

    
    }=req.body
    const sql="insert into data_setaf_workshop_seminar_fdps_sdpa_participation values (?,?,?,?,?,?,?,?,?,?,?,?);"
    database.query(sql,[subtype,
        name_of_the_faculty,
        designation,
        nature_of_the_program,
        title_of_the_program,
        duration_from,
        duration_to,
        participation,
        name_of_the_organization_and_place,
        location_of_organization,
        amount_provided_by_the_HEI,
        Certificates_pdf	
    ],(err,result)=>{
        if (err) {
            res.status(404).json({ "error": err.message })
            return
        }
        res.status(200).json(result)
    })
})


////////Techtalks//////////

server.post('/techtalknewrecord',async(req,res)=>{
    const {name_of_the_faculty,
        MuDiL_number,
        lecture_delivered_to_branch,
        semester,
        section,
        data_of_lecture_delivered,
        period,
        topic_of_discussion,
        no_of_beneficiaries,
        detail_of_discussion_made,
        outcome_of_the_discussion,
        outcome_of_he_activity,
        PO_and_PSO,
        attendance_sheet_pdf,
        handout_of_lecture_pdf	


    }=req.body
    const sql="insert into data_setaf_tech_talks values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    database.query(sql,[name_of_the_faculty,
        MuDiL_number,
        lecture_delivered_to_branch,
        semester,
        section,
        data_of_lecture_delivered,
        period,
        topic_of_discussion,
        no_of_beneficiaries,
        detail_of_discussion_made,
        outcome_of_the_discussion,
        outcome_of_he_activity,
        PO_and_PSO,
        attendance_sheet_pdf,
        handout_of_lecture_pdf	

    ],(err,result)=>{
        if (err) {
            res.status(404).json({ "error": err.message })
            return
        }
        res.status(200).json(result)
    })
})
////////////////////////////nptel//////////////////////////////

server.post('/nptelnewrecord',async(req,res)=>{
    const { S_NO,Academic_year,
    Semester,
    Name_of_the_faculty,
    Year,
    Session,
    Course_name,
    Score_obtained,
    Certificate,
     Certificate_PDF
    }=req.body
    const sql="insert into data_setaf_nptel_certification values (?,?,?,?,?,?,?,?,?);"
    db.query(sql,[S_NO,Academic_year,
        Semester,
        Name_of_the_faculty,
        Year,
        Session,
        Course_name,
        Score_obtained,
        Certificate,
        Certificate_PDF
    ],(err,result)=>{
        if (err) {
            res.status(404).json({ "error": err.message })
            return
        }
        res.status(200).json(result)
    })
})


module.exports = server