const { error } = require('console')
const express = require('express')
const app = express()
app.use(express.json())
// conect database
const Pool = require("pg").Pool
const pool = new Pool({
    host :"localhost",
    user : "postgres",
    password : '12345678',
    database: 'salesHRDB',
    port : 5432
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/json', function (req, res) {
    res.send('Hello World')
  })
  

// app.listen(3000)
const port = process.env.PORT || 3001
 

// buat crud with sql raw native
app.get("/api/v1/customers", (req,res)=>{
    // call pool for query
    pool.query('select * from customers',
    [],
    (error, result)=>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })

})