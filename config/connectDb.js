const mongoose = require('mongoose');
const colors = require('colors');
// const { default: mongoose } = require('mongoose');

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MongoDB_URL);
        console.log(`Server running on ${mongoose.connection.host}`.bgBlue.white);
    }    
    catch (error){
        console.log(`${error}`.bgRed)
    }
    
}
module.exports = connectDb;