const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log("error")
        console.log(err);
    })

// working with virtulas.
//Virtuals are document properties that you can get and set but that do not get persisted to MongoDB. The getters are useful for formatting or combining fields, while setters are useful for de-composing a single value into multiple values for storage.

// creating schema.

const personSchema = new mongoose.Schema({
    name:{
        first: String,
        last: String
    }
})

const Person = mongoose.model('Person', personSchema);

personSchema.virtual('fullName').get(function (){
    return `${this.name.first} ${this.name.last}`
})