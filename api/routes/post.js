const express= require('express')
const router = express.Router()
const {getpost,getposts,addpost, deletepost,updatepost}= require('../controllers/post')

router.route('/').get(getposts)
router.route('/:id').get(getpost)
router.delete("/:id", deletepost);
router.put("/:id", updatepost);
router.route('/').post(addpost)

module.exports= router;