const express=require('express');
const mongoose=require('mongoose')
const user=require('./model.js')

const cors=require('cors')
const app=express();
const url_connection="mongodb+srv://Moataz:Moataz0101@cluster0.ke2gb.mongodb.net/college?retryWrites=true&w=majority";
mongoose.connect(url_connection,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});



app.use(cors())
app.use(express.json())
app.post('/users',(req,res)=>{
    user.create(req.body,(err,data)=>{
        if(err){
                console.log(err);
        }else{
                console.log(data);
        }
    })
})
app.get('/register',(req,res)=>{
    user.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/current_term',(req,res)=>{
    user.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
})
app.put('/register',async(req,res)=>{
    const userID=req.body.username;
    const NewSubjects=req.body.subjects;
    console.log(userID)
    console.log(NewSubjects)
    try{
        await user.findOne({username:userID},(err,result)=>{
            result.Subjects=NewSubjects;
            result.save()
        })
    }catch(err){
console.log(err)
    }
  
})

app.listen(9000)
