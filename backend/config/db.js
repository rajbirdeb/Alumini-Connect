const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async()=>{


    try{

        await mongoose.connect(process.env.MONGO_URI,{

            useNewUrlParser: true,
      useUnifiedTopology: true,

        });

        console.log('Connected MongoDB Atlas!');
    }

    catch(err){
        console.error('Failed to connect to MongoDB Atlas:', err);
        process.exit(1);
    }

};

module.exports = connectDB;
