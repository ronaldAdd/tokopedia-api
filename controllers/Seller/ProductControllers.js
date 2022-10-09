const getProduct = require('./../../data/Seller/Product/getProduct.json');
const getProductVariant = require('./../../data/Seller/Product/getProductVariant.json');
const createProduct = require('./../../data/Seller/Product/createProduct.json');
const editProduct = require('./../../data/Seller/Product/editProduct.json');

const checkUploadStatusProduct = require('./../../data/Seller/Product/CheckUploadStatus.json');
const SetActiveProduct = require('./../../data/Seller/Product/SetActiveProduct.json');
const SetInactiveProduct = require('./../../data/Seller/Product/SetInactiveProduct.json');

const UpdatePriceOnly = require('./../../data/Seller/Product/UpdatePriceOnly.json');
const UpdateStockOnly = require('./../../data/Seller/Product/UpdateStock.json');
const DeleteProduct = require('./../../data/Seller/Product/DeleteProduct.json');


const Joi=require('joi');
const axios = require("axios");


exports.getProduct = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const schemaQuery = Joi.object({
    product_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        
    // try {
    //     var config = {
    //         method: 'get',
    //         url: `https://fs.tokopedia.net/inventory/v1/fs/${dataParams['id']}/product/info?product_id=${dataQuery['product_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA
    //         }
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(getProduct);    
}






exports.getProductVariant = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const schemaQuery = Joi.object({
    cat_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        
    // try {
    //     var config = {
    //         method: 'get',
    //         url: `https://fs.tokopedia.net/inventory/v2/fs/${dataParams['id']}/category/get_variant?cat_id=${dataQuery['cat_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA
    //         }
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(getProductVariant);    
}



exports.edit = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        
    const schemaBody = Joi.object({
        products: Joi.array().items(Joi.object({
            Name: Joi.string().required(),
            category_id: Joi.number().required(),
            price: Joi.number().required(),
            status: Joi.string().required(),
            min_order: Joi.number().required(),
            condition: Joi.string().required(),
            stock: Joi.number().required(),
            price_currency: Joi.string().required(),
            weight: Joi.number().required(),
            weight_unit: Joi.string().required(),
            pictures: Joi.array().items(Joi.object({
                file_path: Joi.string().required(),
            })),
            }).unknown()),
        }).unknown();
        const errorBody = schemaBody.validate(dataBody); 
        if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);
    
    // try {
    //     var config = {
    //         method: 'patch',
    //         url: `https://fs.tokopedia.net/v3/products/fs/${dataParams['id']}/edit?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //           'Content-Type': 'application/json'
    //         },
    //         data:dataBody
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(editProduct);    
}    







exports.create = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        
    const schemaBody = Joi.object({
        products: Joi.array().items(Joi.object({
            Name: Joi.string().required(),
            category_id: Joi.number().required(),
            price: Joi.number().required(),
            status: Joi.string().required(),
            min_order: Joi.number().required(),
            condition: Joi.string().required(),
            stock: Joi.number().required(),
            price_currency: Joi.string().required(),
            weight: Joi.number().required(),
            weight_unit: Joi.string().required(),
            pictures: Joi.array().items(Joi.object({
                file_path: Joi.string().required(),
            })),
            }).unknown()),
        }).unknown();
        const errorBody = schemaBody.validate(dataBody); 
        if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);
    
    // try {
    //     var config = {
    //         method: 'post',
    //         url: `https://fs.tokopedia.net/v3/products/fs/${dataParams['id']}/create?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //           'Content-Type': 'application/json'
    //         },
    //         data:dataBody
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(createProduct);    
}    






exports.uploadStatus = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        

    // try {
    //     var config = {
    //         method: 'get',
    //         url: `https://fs.tokopedia.net/v2/products/fs/${dataParams['id']}/status/${dataParams['upload_id']}?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //         }
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(checkUploadStatusProduct);    
}    






exports.active = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        
    const schemaBody = Joi.object({
        product_id: Joi.array().items(Joi.number())
        });
        const errorBody = schemaBody.validate(dataBody); 
        if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);
    // try {
    //     var config = {
    //         method: 'post',
    //         url: `https://fs.tokopedia.net/v1/products/fs/${dataParams['id']}/active?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //           'Content-Type': 'application/json'
    //         },
    //         data:dataBody
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(SetActiveProduct);    
}    







exports.inActive = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        
    const schemaBody = Joi.object({
        product_id: Joi.array().items(Joi.number())
        });
        const errorBody = schemaBody.validate(dataBody); 
        if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);
    // try {
    //     var config = {
    //         method: 'post',
    //         url: `https://fs.tokopedia.net/v1/products/fs/${dataParams['id']}/inactive?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //           'Content-Type': 'application/json'
    //         },
    //         data:dataBody
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(SetInactiveProduct);    
}    







exports.setPriceOnly = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        

    const schemaBody = Joi.array().items(Joi.object({
        new_price: Joi.number().required(),
            }).unknown())
        const errorBody = schemaBody.validate(dataBody); 
        if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);    
    // try {
    //     var config = {
    //         method: 'post',
    //         url: `https://fs.tokopedia.net/inventory/v1/fs/${dataParams['id']}/price/update?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //           'Content-Type': 'application/json'
    //         },
    //         data:dataBody
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         console.log(error,'error')
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(UpdatePriceOnly);    
}    






exports.setStockOnly = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        

    const schemaBody = Joi.array().items(Joi.object({
        new_stock: Joi.number().required(),
            }).unknown())
        const errorBody = schemaBody.validate(dataBody); 
        if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);    
    // try {
    //     var config = {
    //         method: 'post',
    //         url: `https://fs.tokopedia.net/inventory/v1/fs/${dataParams['id']}/stock/update?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //           'Content-Type': 'application/json'
    //         },
    //         data:dataBody
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         console.log(error,'error')
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(UpdateStockOnly);    
}    







exports.deleteProductById = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const dataBody=req.body;

    const schemaQuery = Joi.object({
    shop_id: Joi.string().required(),
    });
    const errorQuery = schemaQuery.validate(dataQuery); 
    if (errorQuery.error) return res.status(400).send(errorQuery.error.details[0].message);
        


    
    const schemaBody = Joi.object({
        product_id: Joi.array().items(Joi.number())
        });
        const errorBody = schemaBody.validate(dataBody); 
        if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);    
    // try {
    //     var config = {
    //         method: 'post',
    //         url: `https://fs.tokopedia.net/v3/products/fs/${dataParams['id']}/delete?shop_id=${dataQuery['shop_id']}`,
    //         headers: { 
    //           'Authorization': process.env.APIKEY_TOKOPEDIA,
    //           'Content-Type': 'application/json'
    //         },
    //         data:dataBody
    //       };
    //       try {
    //         const results=await axios(config);
    //         return res.status(200).send(results.data);    
    //       } catch (error) {
    //         console.log(error,'error')
    //         return res.status(400).send(error.response.data);
    //       }
    // } catch (error) {
    //     res.status(400).send(error);            
    // }
    return res.status(200).send(DeleteProduct);    
}    