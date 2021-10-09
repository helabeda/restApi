const mongoose = require ('mongoose')

const connectdb=async()=>{
    try {
       await mongoose.connect(process.env.DataBase),{
        useNewUrlParser: true,
        useUnifieldTopology: true
       }
        console.log("db connecteb")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectdb