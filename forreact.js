import myexpress from 'express'
import mymongodb from 'mongodb'
import cors from 'cors'
const app = new myexpress()
app.use(myexpress.json())
app.use(cors({
    origin : '*'
}))
const mongodbdriver = mymongodb.MongoClient
let databsename
const mongodburl = "mongodb://127.0.0.1:27017/"
mongodbdriver.connect(mongodburl , (err,myd)=>{
    if(err) throw err
    databsename = myd.db("rplteamlist")
})
app.post('/datafromreact' , (req,res)=>{
    const data = req.body
    console.log(data)
    databsename.collection('teams').insertOne(data , (err)=>{
        if(err) throw err 
        console.log("Data successfully Inseted")
        res.send("Data added successfully")
    })
})
app.listen(2020);