const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/Collage_Project');
  console.log('db connected')
}
const AddressSchema = new mongoose.Schema({
    name: String,
    no: Number
});

const User = mongoose.model('Address', AddressSchema);




const server = express();

server.use(cors());
server.use(bodyParser.json());


server.get('/demo',async (req,res)=>{
    const docs = await User.find({});
    res.json(docs)
    // res.send("hre")
    console.log(docs);
})
server.listen(8080,()=>{
    console.log('server started')
})