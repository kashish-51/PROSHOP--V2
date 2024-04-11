import path from 'path';
import express from 'express';
import multer from 'multer';
const router = express.Router();

const storage = multer.diskStorage({
    destination(req,file,cb) {
        cb(null, 'uploads/')  // cb is callback, null is actually for error but since we dont have any error here we have written null and uploads/ is where we want our image to go
    },
    filename(req, file, cb){
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
        //fieldname can be anything we are using image
    }  //extname is extension name of the file
});


function checkFileType(file,cb){
    const filetypes = /jpg|jpeg|png/;  
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());   //checking extension and converting to lowercase
    const mimetype = filetypes.test(file.mimetype);
    if(extname && mimetype){
        return cb(null, true);
    }else{
        cb('Image only!');
    }
};

const upload = multer({
   storage,
});

router.post('/', upload.single('image'),(req,res)=>{ // we are using single because we want to allow only one image to be uploaded

    res.send({
        message:'Image Uploaded',
        image: `/${req.file.path}`,
    });

})

export default router;

