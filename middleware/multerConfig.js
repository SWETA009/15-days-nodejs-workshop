const multer =require('multer')//cjs standard ma based
//import:multer from 'multer'
 
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./storage')//cb(err,success) cb means call back,yo code chai lekhnai parxa for handing file
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)//replace hunna
    }
})


module.exports={multer,storage}
/*export{
    multer,
    storage
}*/