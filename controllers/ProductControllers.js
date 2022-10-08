const productData = require('./../data/Products/Products.json');
const productsVariant = require('./../data/Products/ProductsVariant.json');
const addNewProduct = require('./../data/Products/AddNewProduct.json');
const deleteProduct = require('./../data/Products/DeleteProduct.json');


exports.store = async (req,res,next)=> {
    try {
        res.status(200).send(addNewProduct);
    } catch (error) {
        res.status(400).send('error');        
    }
}




exports.read = async (req,res,next)=> {
    try {
        res.status(200).send(productData);
    } catch (error) {
        res.status(400).send('error');            
    }    
}




exports.delete = async (req,res,next)=> {
    try {
        res.status(200).send(deleteProduct);
    } catch (error) {
        res.status(400).send('error');            
    }    
}
    


exports.readVariant = async (req,res,next)=> {
    res.status(200).send(productsVariant);
    }
    