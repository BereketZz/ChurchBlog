const express= require('express')
const app = express()


app.get('/', (req,res)=>{
   res.send('welcome back Mr')
})

app.listen(3000,'localhost',()=>console.log('Server is listening on port 3000'))