
// send data to html page
const express= require('express')
const app=express()
const db=require('./mongo')
const dbase=require('./mongoac')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const stripe = require("stripe")("sk_test_51P1l8QSF158xzIU4IfO06H77ceWEe1piFeDgMh1FVoUpgWVlI9bSDdMfXR6jaDEvsoq6jMj05MoRr7OUptSzDacE006dAsFvII");



app.use(cors());
app.use(bodyParser.json());

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String
//     });
    
    // const User = mongoose.model('User', userSchema);
    
    
    app.post('/',async (req,res)=>{
        let data=await dbase();
      let  dat =await data.find({email:req.body.email,number:req.body.Number}).toArray()
        console.log(dat,"ssss");
        if (dat[0]!=null) {
            console.log("alredy");
            app.get('/4',async(req,res)=>{
                let us="already!!"
        console.log(us);
        res.json(us)
            })
        }
        else{
            let data=await dbase();
        const resp=await data.insertOne({name:req.body.username,email:req.body.email,number:req.body.Number,password:req.body.password ,carnameandprice:"null",fromdate:"null",todate:"null"})
        if (resp.acknowledged==true) {
         console.log("updated!!!!");
         console.log(resp);
        }
        else{
            console.log("not updated!!!!");
            console.log(resp);
            res.json(resp);
return
        }
    }
    })


    
    app.post('/l',async (req,res)=>{
        let data=await dbase();
        data =await data.find({email:req.body.emaill,password:req.body.passwordd}).toArray()
        // if (data[0].email==req.body.emaill && data[0].password==req.body.passwordd) {
            if(data[0]!=null){
            app.get('/2',async(req,res)=>{
                
                res.json(data)
                console.log(data,"data");
                    })
                }
                else{
                    console.log("nnnnnnnnnnnnnnnnnnnnnnn");
                }
          


        // const resp=await data.insertOne({email:req.body.emaill,password:req.body.passwordd})
        // if (resp.acknowledged==true) {
        //  console.log("updated!!!!");
        // }
        // else{
        //     console.log("not updated!!!!");

        // }
        //  console.log(resp);
        //  res.json(resp);
    })
    
    // // app.post('/',async (req,res)=>{
    // //     let data=await dbase();
    // //         let datn=await data.find({name:"sahilsingh"}).toArray()
    // //             console.log(datn,"ss")
    // //             res.send(datn)
    // // })

// Bookingdate
    app.post('/6',async (req,res)=>{
        
        let book=await dbase();
console.log(book,"book");
let datamail =await book.find({email:req.body.Memail}).toArray()
console.log(datamail,"data");
const resp=await book.updateOne({email:req.body.Memail},{$set:{carnameandprice:req.body.Modelname,fromdate:req.body.Fromdate,todate:req.body.Todate}})


    })


    app.get('/',async(req,res)=>{
        let users=await db();
         users =await users.find().toArray()
console.log(users,);
res.json(users)
    })


    app.post("/api/create-checkout-session",async(req,res)=>{
        const {products} = req.body;
        console.log(products,"timee");
        // const lineItems=products
        const lineItems = products.map((product)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:product.moduleName,
                    // Perhour:product.Perhour
                },
                unit_amount:product.Perhour*100
            },
            quantity:product.Total
        }));
let pro=""
      lineItems.forEach(item => {
            // Access each object in the lineItems array here
            console.log(item,"item");
            pro=item
        });
console.log(lineItems,"lp");
        // console.log(lineItems,"arra");
        // console.log(lineItems[1].price_data,"ara");
    
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:lineItems,
            mode:"payment",
            success_url:"http://localhost:3000/",
            cancel_url:"http://localhost:3000/Bookingcars",
        });
    
        res.json({id:session.id})
    })

app.listen(8080)