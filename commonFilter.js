const express = require('express')
const base=require('./db')
// const bodyParser = require('body-parser')
const route = express.Router()

// route.post('/filterReportsWithParticulars/:head',async(req,res)=>{
//     const {acdyr_id,sem_id,major_id,sub_id,dept_id,emp_id} = req.body
//     let resultArray=[]
//     if(major_id=="" && sub_id==""){
//     let sql="SELECT * FROM data_sub_report_type where head_report_id=?"
//     base.query(sql,[req.params.head],(err,rows)=>{
//         if(err){
//             return
//         }
//         // res.status(200).json({rows})
//         for(let i=0;i<rows.length;i++){
//             // console.log(rows[i].table_name)
//             if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? order by report_id desc`
//                 base.query(sql,[acdyr_id],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//             else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where dept_id=? order by report_id desc`
//                 base.query(sql,[dept_id],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//             else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and dept_id=? order by report_id desc`
//                 base.query(sql,[acdyr_id,dept_id],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//             else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and sem_id=? order by report_id desc`
//                 base.query(sql,[acdyr_id,sem_id],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//             else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where dept_id=? and event_coordinator like ? order by report_id desc`
//                 base.query(sql,[dept_id,`%${emp_id}%`],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//             else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and sem_id=? and dept_id=? order by report_id desc`
//                 base.query(sql,[acdyr_id,sem_id,dept_id],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//             else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
//                 base.query(sql,[acdyr_id,dept_id,`%${emp_id}%`],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//             else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                 let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id=? and sem_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
//                 base.query(sql,[acdyr_id,sem_id,dept_id,`%${emp_id}%`],(err,temp)=>{
//                     if(err){
//                         console.log(err)
//                         return
//                     }
//                     else if(temp.length==0){
//                         console.log("No records")
//                         return
//                     }
//                     for(let i=0;i<temp.length;i++){
//                         resultArray.push(temp[i])
//                     }
//                     res.status(200).json(resultArray)
//                 })
//             }
//         }
//             // res.status(200).json({resultArray})
//     })
//     }
//     if(major_id!="" && sub_id==""){
//         let sql="SELECT * FROM data_sub_report_type where major_report_id=?"
//         base.query(sql,[major_id],(err,temp)=>{
//             if(err){
//                 return
//             }
//             for(let i=0;i<temp.length;i++){
//                 // console.log(temp[i].table_name)
//                 if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id=?`
//                     base.query(sql,[major_id],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let i=0;i<temp.length;i++){
//                             resultArray.push(temp[i])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id=? and major_report_id=? order by report_id desc`
//                     base.query(sql,[acdyr_id,major_id],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let i=0;i<temp.length;i++){
//                             resultArray.push(temp[i])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id=? and dept_id=? order by report_id desc`
//                     base.query(sql,[major_id,dept_id],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let i=0;i<temp.length;i++){
//                             resultArray.push(temp[i])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id=? and sem_id=? and major_report_id=? order by report_id desc`
//                     base.query(sql,[acdyr_id,sem_id,major_id],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let i=0;i<temp.length;i++){
//                             resultArray.push(temp[i])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
//                     base.query(sql,[major_id,dept_id,`%${emp_id}%`],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let i=0;i<temp.length;i++){
//                             resultArray.push(temp[i])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//                 else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
//                     let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id=? and sem_id=? and major_report_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
//                     base.query(sql,[acdyr_id,sem_id,major_id,dept_id,`%${emp_id}%`],(err,rows)=>{
//                         if(err){
//                             console.log(err)
//                             return
//                         }
//                         else if(rows.length==0){
//                             console.log("No records")
//                             return
//                         }
//                         for(let i=0;i<temp.length;i++){
//                             resultArray.push(temp[i])
//                         }
//                         res.status(200).json(resultArray)
//                     })
//                 }
//             }
//         })
//     }
//     if(sub_id!=""){
//         if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
//             let sql=`select * from ${sub_id} order by report_id desc`
//             base.query(sql,(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
//             let sql=`select * from ${sub_id} where dept_id=? order by report_id desc`
//             base.query(sql,[dept_id],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
//             let sql=`select * from ${sub_id} where acdyr_id=? order by report_id desc`
//             base.query(sql,[acdyr_id],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
//             let sql=`select * from ${sub_id} where acdyr_id=? and sem_id=? order by report_id desc`
//             base.query(sql,[acdyr_id,sem_id],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
//             let sql=`select * from ${sub_id} where dept_id=? and event_coordinator like ? order by report_id desc`
//             base.query(sql,[dept_id,`%${emp_id}%`],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
//             let sql=`select * from ${sub_id} where acdyr_id=? and sem_id=? and dept_id=? order by report_id desc`
//             base.query(sql,[acdyr_id,sem_id,dept_id],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
//             let sql=`select * from ${sub_id} where acdyr_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
//             base.query(sql,[acdyr_id,dept_id,`%${emp_id}%`],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//         else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
//             let sql=`select * from ${sub_id} where acdyr_id=? and sem_id=? and dept_id=? and event_coordinator like ? order by report_id desc`
//             base.query(sql,[acdyr_id,sem_id,dept_id,`%${emp_id}%`],(err,temp)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 else if(temp.length==0){
//                     console.log("No records")
//                     return
//                 }
//                 for(let i=0;i<temp.length;i++){
//                     resultArray.push(temp[i])
//                 }
//                 res.status(200).json(resultArray)
//             })
//         }
//     }
// })

route.post('/filterReportsWithParticulars/:head',async(req,res)=>{
    const {acdyr_id,sem_id,major_id,sub_id,dept_id,emp_id} = req.body
    const faculty_id = emp_id.split(",")
    let resultRecord=[]
    let resultArray=[]
    if(major_id=="" && sub_id==""){
    let sql="SELECT * FROM data_sub_report_type where head_report_id=?"
    base.query(sql,[req.params.head],(err,rows)=>{
        if(err){
            return
        }
        // res.status(200).json({rows})
        for(let i=0;i<rows.length;i++){
            // console.log(rows[i].table_name)
            if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) order by report_id desc`
                base.query(sql,(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
                let sql=`SELECT * FROM ${rows[i].table_name} where dept_id in (${dept_id}) order by report_id desc`
                base.query(sql,(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) order by report_id desc`
                base.query(sql,(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id=="" && emp_id==""){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) order by report_id desc`
                base.query(sql,(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id=="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
                for(let i=0;i<faculty_id.length;i++){
                    let sql=`SELECT * FROM ${rows[i].table_name} where dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
                base.query(sql,[`%${faculty_id[i]}%`],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                })
                }
                res.status(200).json(resultArray)
            }
            else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id==""){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) order by report_id desc`
                base.query(sql,(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                    res.status(200).json(resultArray)
                })
            }
            else if(acdyr_id!="" && sem_id=="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
                for(let i=0;i<faculty_id.length;i++){
                    let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
                base.query(sql,[`%${faculty_id[i]}%`],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                })
                }
                res.status(200).json(resultArray)
            }
            else if(acdyr_id!="" && sem_id!="" && major_id=="" && sub_id=="" && dept_id!="" && emp_id!=""){
                for(let i=0;i<faculty_id.length;i++){
                let sql=`SELECT * FROM ${rows[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
                base.query(sql,[`%${faculty_id[i]}%`],(err,temp)=>{
                    if(err){
                        console.log(err)
                        return
                    }
                    else if(temp.length==0){
                        console.log("No records")
                        return
                    }
                    for(let i=0;i<temp.length;i++){
                        resultArray.push(temp[i])
                    }
                })
                }
                res.status(200).json(resultArray)
            }
        }
            // res.status(200).json({resultArray})
    })
    }
    if(major_id!="" && sub_id==""){
        let sql=`SELECT * FROM data_sub_report_type where major_report_id in (${major_id})`
        base.query(sql,(err,temp)=>{
            if(err){
                return
            }
            for(let i=0;i<temp.length;i++){
                // console.log(temp[i].table_name)
                if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
                    let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id})`
                    base.query(sql,(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
                    let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and major_report_id in (${major_id}) order by report_id desc`
                    base.query(sql,(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id==""){
                    let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id}) and dept_id in (${dept_id}) order by report_id desc`
                    base.query(sql,(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id=="" && emp_id==""){
                    let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and major_report_id in (${major_id}) order by report_id desc`
                    base.query(sql,(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                        res.status(200).json(resultArray)
                    })
                }
                else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
                    for(let i=0;i<faculty_id.length;i++){
                        let sql=`SELECT * FROM ${temp[i].table_name} where major_report_id in (${major_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
                    base.query(sql,[`%${faculty_id[i]}%`],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                    })
                    }
                    res.status(200).json(resultArray)
                }
                else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id=="" && dept_id!="" && emp_id!=""){
                    for(let i=0;i<faculty_id.length;i++){
                        let sql=`SELECT * FROM ${temp[i].table_name} where acdyr_id in (${acdyr_id}) and sem_id ${sem_id} and major_report_id in (${major_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
                    base.query(sql,[`%${faculty_id[i]}%`],(err,rows)=>{
                        if(err){
                            console.log(err)
                            return
                        }
                        else if(rows.length==0){
                            console.log("No records")
                            return
                        }
                        for(let i=0;i<temp.length;i++){
                            resultArray.push(temp[i])
                        }
                    })
                    }
                    res.status(200).json(resultArray)
                }
            }
        })
    }
    if(sub_id!=""){
        if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
            let sql=`select * from ${sub_id} order by report_id desc`
            base.query(sql,(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
            let sql=`select * from ${sub_id} where dept_id in (${dept_id}) order by report_id desc`
            base.query(sql,(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
            let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) order by report_id desc`
            base.query(sql,(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id=="" && emp_id==""){
            let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) order by report_id desc`
            base.query(sql,(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id=="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
            for(let i=0;i<faculty_id.length;i++){
                let sql=`select * from ${sub_id} where dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
            base.query(sql,[`%${emp_id}%`],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
            })
            }
            res.status(200).json(resultArray)
        }
        else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id==""){
            let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in (${dept_id}) order by report_id desc`
            base.query(sql,(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
                res.status(200).json(resultArray)
            })
        }
        else if(acdyr_id!="" && sem_id=="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
            for(let i=0;i<faculty_id.length;i++){
                let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and dept_id in (${dept_id}) and event_coordinator like ? order by report_id desc`
            base.query(sql,[`%${faculty_id[i]}%`],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
            })
            }
            res.status(200).json(resultArray)
        }
        else if(acdyr_id!="" && sem_id!="" && major_id!="" && sub_id!="" && dept_id!="" && emp_id!=""){
            for(let i=0;i<faculty_id.length;i++){
                let sql=`select * from ${sub_id} where acdyr_id in (${acdyr_id}) and sem_id in (${sem_id}) and dept_id in(${dept_id}) and event_coordinator like ? order by report_id desc`
            base.query(sql,[`%${emp_id}%`],(err,temp)=>{
                if(err){
                    console.log(err)
                    return
                }
                else if(temp.length==0){
                    console.log("No records")
                    return
                }
                for(let i=0;i<temp.length;i++){
                    resultArray.push(temp[i])
                }
            })
            }
            res.status(200).json(resultArray)
        }
    }
})

// route.get('/deltables',async(req,res)=>{
//     let sql=`select table_name from data_sub_report_type`
//     base.query(sql,(err,rows)=>{
//         if(err){
//             console.log(err)
//             // reject(err)
//             return
//         }
//         // res.status(200).json({rows})
//         for(let i=0;i<rows.length;i++){
//             if(rows[i].table_name=="data_management" || rows[i].table_name=="data_management_seminar"){
//                 continue
//             }
//             // let sql=`truncate table ${rows[i].table_name}`
//             let sql=`
//             DELIMITER //
//             CREATE TRIGGER update_${rows[i].table_name}
//             BEFORE INSERT ON ${rows[i].table_name}
//             FOR EACH ROW
//             BEGIN
//                 DECLARE next_rep_id varchar(100);
//                 DECLARE unique_rep_id int;
//                 SELECT CONCAT("RPT",COALESCE(MAX(rep_id), 5000) + 1) INTO next_rep_id FROM unique_ids;
//                 SELECT COALESCE(MAX(rep_id),5000) + 1 INTO unique_rep_id FROM unique_ids;
            
//                 SET NEW.report_id = next_rep_id;
                
//             insert into unique_ids values(unique_rep_id);
//             END;
//             //`
//             base.query(sql,(err,result)=>{
//                 if(err){
//                     console.log(err)
//                     return
//                 }
//                 // res.status(200).json({result})
//                 console.log(`${rows[i].table_name} dropped`)
//             })
//         }
//     })
// })

route.get('/deltables', async (req, res) => {
    let sql = `SELECT table_name FROM data_sub_report_type`;
    base.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }

        for (let i = 0; i < rows.length; i++) {
            if (rows[i].table_name === 'data_management' || rows[i].table_name === 'data_management_seminar') {
                continue;
            }

            let triggerSql = `truncate ${rows[i].table_name}`;

            base.query(triggerSql, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(`${rows[i].table_name} dropped`);
            });
        }
    });
});

// route.get('/selectdummy',async(req,res)=>{
//     let faculty = ["1"]
//     let sql=`select * from data_faculties where dept_id in (${faculty})`
//     base.query(sql,(err,row)=>{
//         if(err){
//             console.log(err)
//             return
//         }
//         res.status(200).json({row})
//     })
// })

module.exports=route