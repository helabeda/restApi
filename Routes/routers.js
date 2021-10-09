const express=require("express")
const router=express.Router();
const User=require("../Models/User")


// RETURN ALL USERS
router.get("/users", async (req, res) => {
    
  try {
    const users = await User.find();
    res.status(200).send({ users, msg: "Users received successfully" });
  } 
  catch (error) {
    res.status(400).send({error, msg: "Did not get users" });
  }
});

router.post("/add", async(req,res)=>{
  try {
      const newUser= new User(req.body)
       await newUser.save()
      res.status(200).send("User was added successfully")
  } catch (error) {
    res.status(400).send({error,msg:"Add Failed"})
  }
})

router.put("/:id",async (req,res)=>{
  try {
    const userUpdate=await User.updateOne({_id:req.params.id},{$set:{...req.body}})
    res.send({userUpdate,msg:"User Updated"})
  } catch (error) {
    console.log(error)
    res.send({ error, msg: "an error has occured" });
    
  }
})

router.delete("/users/:id",async(req,res)=>{
 
  try {
    const todelete= await User.deleteOne({_id:req.params.id})
    todelete.deleteCount?
    res.send({todelete,msg:"User deleted"}):
    res.send({todelete,msg:"this user no longer exists"})
  } catch (error) {
    res.send(error,"No user to delete")
  }
})

module.exports=router