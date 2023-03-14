const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI="mongodb+srv://vishal123:Vishalmongouser@cluster0.q2rbdx0.mongodb.net/inotebook";

const connectToMongo=()=>{
    mongoose.connect(mongoURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, () => { 
        console.log('connected to database myDb ;)') 
    })
}
module.exports=connectToMongo
// 103.172.157.158/32  ip address of monog db compass or altas