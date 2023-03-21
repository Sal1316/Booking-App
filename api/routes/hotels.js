import express from "express";
import Hotel from "../modals/hotel.js";

const router = express.Router();

// CRUD Operations:

// Create: 
router.post("/", async (req,res)=> {
      
      const newHotel = new Hotel(req.body)

      try{
            const savedHotel = await newHotel.save()
            res.status(200).json(savedHotel)
      }
      catch(err) {
           res.status(500).json(err) 
      }
})
 
// UPDATE: 
router.put("/:id", async (req,res)=> {
      
      try{
            const updatedHotel = await Hotel.findByIdAndUpdate(rew.params.id, { $set: req.body }, {new: true})
            res.status(200).json(updatedHotel)
      }
      catch(err) {
           res.status(500).json(err) 
      }
})

// DELETE: 
router.delete("/:id", async (req,res)=> {
      
      try{
            const deleteHotel = await Hotel.findByIdAndDelete(rew.params.id)
            res.status(200).json("Hotel has been deleted")
      }
      catch(err) {
           res.status(500).json(err) 
      }
})

// GET: 
router.get("/:id", async (req,res)=> {
      
      try{
            const hotel = await Hotel.findById(rew.params.id)
            res.status(200).json(hotel)
      }
      catch(err) {
           res.status(500).json(err) 
      }
})

// GET ALL: 
router.get("/", async (req,res,next)=> {
      const failed = true;

      try{
            const hotels = await Hotel.find(rew.params.id)
            res.status(200).json(hotels)
      }
      catch(err) {
           next(err) 
      }
})

export default router