const mongoose = require('mongoose');
const shcema = mongoose.Schema;

const UserShhema = new shcema ({
    fullName:{
        type:String , 
        required:true
 
         
    },
    problem:{
        type:String , 
        required:true
    },
    time:{
        type:String , 
        required:true ,
    }
},
{timestamps:true}

)


const BookModel = mongoose.model('booking' , UserShhema);


module.exports  = BookModel  