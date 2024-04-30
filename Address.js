const moongose=require('mongoose')

const AddressSchema=new moongose.Schema({
    name:String,
    no:Number
})

const UserModel = moongose.model("Address",AddressSchema)
module.exports=UserModel