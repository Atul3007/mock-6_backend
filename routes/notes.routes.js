const express=require("express");
const note_router=express.Router();
const {notesmodel}=require("../models/note.mode")

note_router.get("/",async(req,res)=>{
    try {
        const data=await notesmodel.find();
        res.send(data);    
    } catch (error) {
        console.log(error);
        res.send("Unable to fetch data");
    }
    
})
note_router.get("/:id",async(req,res)=>{
    const ID=req.params.id;
    let flight=await notesmodel.findOne({_id:ID});
    try {
        res.send(flight);    
    } catch (error) {
        console.log(error);
        res.send("Unable to fetch data");
    }
    
})
note_router.post("/",async(req,res)=>{
    const payload=req.body;
    try {
        const newnote=new notesmodel(payload);
        await newnote.save();
        res.send(" created")
    } catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
})
note_router.patch("/:id",async(req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    try {
        let data=await notesmodel.findByIdAndUpdate(({_id:id},payload));
            res.send(data);
    } catch (error) {
        res.send(payload);
       
    }
    
            
    
})
note_router.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    try {
       
        await notesmodel.findByIdAndDelete({"_id":id});
        res.send("Deleted");
       
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
    }
})
module.exports={
    note_router
}