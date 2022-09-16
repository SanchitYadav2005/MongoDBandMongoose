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
            required: true // there are many more validators you can search on mongoose docs.
        },
        price:{
            type: Number,
            required: true
        },
        onSale:{
            type: Boolean,
            default: true
        }
    }
)

productSchema.methods.toggleSale = function () {
    this.onSale = !this.onSale // this will toggle onSale to the opposite of what the value is defined.
    return this.save(); // this will save it into model.
};

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: 'mountain bike', price: 455});
bike.save()
    .then(data=>{
        console.log("worked");
        console.log(data)
    })
    .catch((err)=>{
        console.log("error");
        console.log(err)
    });

// working with instanse methods.


// applying the method 

const sale = async () => {
    const foundProduct = await Product.findOne({name: 'mountain bike'});
    console.log(foundProduct);
    await foundProduct.toggleSale();
    console.log(foundProduct)
};

sale();