const express= require('express')
const app = express()
const cors = require('cors');
const DbConnect= require('./DbConnect')
const postPath= require('./routes/post')

app.use(express.json())
app.use(cors());
app.use('/church/api/posts',postPath)

const start= async ()=>{
  await DbConnect 
  console.log('Connected!')
  app.listen(3000, ()=>console.log('Server is listening on port 3000'))
}
start()

// app.listen(3000,'localhost',()=>console.log('Server is listening on port 3000'))