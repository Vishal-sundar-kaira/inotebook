const mongoose=require('mongoose');
const {Schema}=mongoose;
const NotesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type:String,
        required:true
    },
    Tag:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

})
const notes=mongoose.model('notes',NotesSchema)
module.exports=notes