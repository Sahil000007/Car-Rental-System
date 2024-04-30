const {MongoClient}=require('mongodb')
const url='mongodb://localhost:27017'
const database='Collage_Project'
const client=new MongoClient(url)

async function get()
{
    let result = await client.connect()
    let d=result.db(database)
    return d.collection('Address')
    // let coll=d.collection('product')
    // let resp=await coll.find({}).toArray()
    // console.log(resp);
}
// get().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data);
//     })

// })
// console.log("ssss");

module.exports=get;