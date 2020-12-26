const mongoose=require('mongoose');


const Schema=mongoose.Schema;
const subjectSchema=new Schema({
  subject:String,
  hours:Number
})
const userSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    useremail:{
        type:String,
        required:true
    },
    usergpa:{
        type:String,
        required:true
    },
    Subjects:[subjectSchema]

})

module.exports=mongoose.model('user',userSchema);


