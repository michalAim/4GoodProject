const multer = require('multer');

//the disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({ 
    destination: (req, file, cb) => {
        cb(null, 'uploads/charityCategories/')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true); //callback
    }
    cb(null, false); 
}


const upload = multer({
    //dest: 'uploads/',
    storage,
    limits: {
        fileSize: 1024 * 1024 * 2 //up to 2 mb
    },
    fileFilter
});

module.exports = upload;