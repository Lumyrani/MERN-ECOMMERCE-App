const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById
}= require('../controller/productControllers');

// @desc Get all products from db
//@route GET/api/ products
//@ access public
router.get('/',getProducts);
// router.get('/', (req,res)=>{
// })
// @desc Get a product by id  from db
//@route GET/api/ products/:id
//@ access public
router.get('/:id',getProductById);
// router.get('/:id', (req,res)=>{
    // })

module.exports= router;