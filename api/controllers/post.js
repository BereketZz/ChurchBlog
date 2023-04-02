const DbConnect= require('../DbConnect')
const getpost = (req,res)=>{
    res.json({sucess:true, msg:'this is from getpost route'})
}

const getposts= (req,res)=>{
 

     const q= req.query.cat? "SELECT  * FROM posts WHERE catagory=?":"SELECT * FROM posts"
     DbConnect.query(q,[req.query.cat],(error,data)=>{
       if(error) return res.json(error) 
      
       return res.status(200).json(data)

    })
}
const addpost= (req,res)=>{
    res.json({sucess:true, msg:"this is from the addpost route"})
}
const updatepost= (req,res)=>{
    res.json({sucess:true , msg:"this is from the update post route"})
}
const deletepost= (req,res)=>{
    res.json({sucess:true , msg:"this is from the delete post route"})
}


module.exports={
    getpost,
    getposts,
    addpost,
    updatepost,
    deletepost
}