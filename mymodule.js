const fs = require ('fs');
const path = require('path');

exports.module=(dir,ext,callback) => {
    ext = `.${ext}`;
    fs.readdir(dir,(err,list) =>{
        if (err) return callback(err) ;
        const filtered =list.filter(file => path.extname(file) === ext);
        return callback(null, filtered);
        
    });
}