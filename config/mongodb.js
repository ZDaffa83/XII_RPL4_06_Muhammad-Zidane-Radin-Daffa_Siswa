import mongoose, { connect } from 'mongoose'

const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/db_siswa")
    console.log("Device Connected")
}

export default connectDB