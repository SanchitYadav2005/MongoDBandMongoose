const mongoose = require('mongoose'); // getting mongoose into our script
// connecting it to the data base using mongoose.connect.

mongoose.connect('mongodb://localhost:27017/test')
// used then to hander error if the connection host is incorrect.
    .then(()=>{
        console.log("connected!")
    })
    .catch(()=>{
        console.log("there is an error")
    })
// creating mongoose schema . Schema is a format how we want to save an info.

const movieSchema = new mongoose.Schema({
    title : String,
    year: Number,
    score: Number,
    rating: String
});

// creating model.

const Movie = mongoose.model('Movie', movieSchema);
const ironman = new Movie({
    title: "Iron Man",
    year: 2007,
    score: 9,
    raging: "R"
});
ironman.save()


