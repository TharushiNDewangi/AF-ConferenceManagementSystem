const router=require("express").Router();
const { createpaper, findAll, findByid } = require('../controller/paper');
const multer = require('multer');


//  const shortid = require('shortid')
 const path = require('path');


const storage = multer.diskStorage({
    destination:function (req,file,cb){
     //     cb(null,path.join(path.dirname(__dirname),'uploads' ))
     cb(null,'./uploads/')
        
    },
    filename:function (req,file ,cb){
        //  cb(null, shortid.generate() + '-' + file.originalname)
     
        cb(null, file.originalname)
    }
})


const upload = multer({ storage })  

router.post('/paper/create',upload.array('researchpaper'),createpaper);
router.get('/papers/:paperid',findByid);
router.get("/",findAll);

 module.exports = router;  