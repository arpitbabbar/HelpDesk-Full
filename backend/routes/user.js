const express = require('express');
const router = express.Router();
const User = require('../models/Users');




router.post('/addAppointment',async (req,res)=>{
    console.log(req.body);
    try{
   
    User.create({
        name: req.body.name,
        number: req.body.number,
        doctorName: req.body.doctorName,
        date: req.body.date
      }).then(user => res.json(user));
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

// router.post('/getDetails',async (req,res)=>{
//     console.log(req.body);
//     try{
//         // const {number} = req.body.number;
//         console.log(req.body);
//         console.log(req.body.number)
//         const user = await User.findOne({number:req.body.number});
//         console.log(user);
//         res.send(user);
//     }
//     catch(error){
//         console.log(error.message);
//         res.status(500).send("Some error occured");
//     }
// })

router.get('/getDetails/:number',async (req,res)=>{
    console.log(req.body);
    try{
        // const {number} = req.body.number;
        // console.log(req.body);
        // console.log(req.body.number)
        const num = req.params.number;
        console.log(num);
        const user = await User.findOne({number:num});
        console.log(user);
        res.send(user);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured");
    }
})

module.exports = router;