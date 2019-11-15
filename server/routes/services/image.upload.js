// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const path = require('path');
// const url = require('url');

// require("dotenv").config();

// // aws.config.update({
// //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// //   accessKeyId: process.env.AWS_ACCESS_KEY,
// //   region: process.env.AWS_REGION
// // });

// const s3 = new aws.S3({
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   Bucket: "creature-images"
// });

// //UPLOAD
// const upload = multer({
//   storage: multerS3({
//     s3: s3,
//     bucket: "creature-images",
//     acl: "public-read",
//     metadata: function(req, file, cb) {
//       cb(null, { fieldName: "TESTING META DATA" });
//     },
//     // The file saved into s3
//     key: function(req, file, cb) {
//       cb(null, Date.now().toString());
//     },
//     limits: { fileSize: 2000000 }
//   })
// });

// //CheckFileType
// function checkFileType( file, cb ){
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extname = filetypes.test( path.extname( file.originalname ).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test( file.mimetype );
//   if( mimetype && extname ){
//    return cb( null, true );
//   } else {
//    cb( 'Error: Images Only!' );
//   }
// }

// module.exports = upload;
