const UploadModel = require("../models/uploadSchema");
const fs = require("fs");

exports.home = (req, res) => {
  res.render("main", {images : "All images"});
};

exports.uploads = (req, res, next) => {
  const files = req.files;

  if (files) {
    const error = new Error("please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }

  let imgArray = files.map((file) => {
    let img = fs.readFileSync(file.path);

    return (encode_image = img.toString("base64"));
  });

 let result= imgArray.map((src,index) =>{

    let finalImg={
        filename:files[index].originalname,
        contentType: files[index].mimetype,
        imageBase64 : src
    }

    let newUpload = new UploadModel(finalImg);

    return newUpload
    .save()
    .then(()=>{
        return{msg: `${files[index].originalname} Uploaded Sucessfully...!`}
    })
    .catch(error =>{
        if(error){
            if(error.name === 'MongoError' && error.code === 11000){
                return Promise.reject({error : `Duplicate ${files[index].originalname}.file already exists`})
            }
            return Promise.reject({error: error.message || `Cannot upload ${files[index].originalname}`})
        }
    })

  });


 Promise.all(result)
 .then(msg =>{
    res.json(msg);
 })
 .catch(err =>{
    res.json(err);
 })
};
