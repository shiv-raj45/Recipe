const {v4:uuid4}=require('uuid')
const { default: axios } = require('axios');
const express=require('express');
const router=express.Router();
const getRecipes=router.get('/',(req,res)=>{
    axios.get('http://localhost:5000/recipes').then((response)=>{
res.send(response.data)  ;
 
})
});
const postrecipes=router.post('/',async(req,res)=>{
   console.log();
   axios.post('http://localhost:5000/recipes',{"id":`${uuid4()}`, "recipe":req.body})
})

module.exports={getRecipes,postrecipes}