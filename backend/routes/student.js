const router=require("express").Router();
const seller=require("../models/seller")

router.route("/add").post((req,res)=>
{
    const name=req.body.name;
    const address=req.body.address;
    const age=Number(req.body.age);

    const newseller = new seller({
        name,
        address,
        age
    })
    newseller.save().then(()=>{
        res.json("seller added");
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{

    seller.find().then((sellers)=>{
        res.json(sellers)
    }).catch((err)=>{
        console.log(err);
    }) 
})

router.route("/update/:id").put(async(req,res)=>{
let sellerid=req.params.id;
//front end variable
const {name,age,gender}=req.body;
const updateseller={
    name,address,age
}
const update=await seller.findByIdAndUpdate(sellerid,updateseller)
.then(()=>{
    res.status(200).send({status:"seller updated",user:update})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"seller updated error"})
}) 
   
})

router.route("/delete/:id").delete(async(req,res)=>{
    let sellerid=req.params.id;
    await seller.findById(sellerid) 
    .then((sellers)=>{
        res.status(200).send({status:"seller deleted"})
    }).catch((err)=>{
        console.log(err);
    }) 
})


router.route("/get/:id").get(async(req,res)=>{
    let sellerid=req.params.id;
    const seller=await seller.findById(sellerid) 
    .then((sellers)=>{
        res.status(200).send({status:"seller fetch",seller:seller})
    }).catch((err)=>{
        console.log(err);
    }) 
})

module.exports=router;

