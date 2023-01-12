import "dotenv/config"
import express from "express"
import models,{sequelize} from "./models/init-models"
import router from "./routes/indexRoutes"

const port=process.env.PORT || 3001
const app =express()

// untuk menerima req uest json dan urlencode
app.use(express.json())

// semua type bisa di terima 
app.use(express.urlencoded({extended:true}))
// model
app.use(async(req,res, next)=>{
    req.context={models}
    next()
}) 

// app.use('/eshopay/', (req, res)=>{
//     res.send('hello guys')
// })
// memanggil router
app.use(router)

 const dropDatabaseSync = false
sequelize.sync({force:dropDatabaseSync}).then(()=>{
    if(dropDatabaseSync){
        console.log("database do not drop")
    }
})

app.listen(port,()=>{
    console.log( `server listening on port ${port}`)
 })