//

import express from "express" 
import dotenv from "dotenv" 
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"

const app = express()
dotenv.config()


const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.")
    } catch (error) {
      throw error;
    }
};

mongoose.connection.on("disconnected", ()=> {
      console.log("mongoDB disconnected!")
})

// middleware: 
app.use(express.json())

app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotels", hotelsRoute)
app.use("/rooms", roomsRoute)

app.use((err,req,res,next)=> {
      const errorStatus = err.status || 500
      const errorMessage = err.message || "Something went wrong!"
      return res.status(errStatus).json({
            success: false,
            status: errorStatus,
            message: errorMessage,
            stack: err.stack,
      })
})

app.listen(8800, () => {
      connect()
      console.log("connected to backend.")
}) 