const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopApp")
    .then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log("error");
        console.log(err);
    });

    
// buid a schema.

const productSchema = new mongoose.Schema(
    // this is how we validate our schema
    {
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        }
    }
)

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'mountain bike', price: 455});
bike.save()
    .then(()=>{
        console.log("worked");
        console.log(bike)
    })
    .catch((err)=>{
        console.log("error");
        console.log(err)
    })