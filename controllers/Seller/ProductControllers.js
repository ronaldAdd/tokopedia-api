const getProduct = require('./../../data/Seller/Product/getProduct.json');
const getProductVariant = require('./../../data/Seller/Product/getProductVariant.json');
const Joi=require('joi');
const axios = require("axios");


exports.getProduct = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const schemaBody = Joi.object({
    product_id: Joi.string().required(),
    });
    const errorBody = schemaBody.validate(dataQuery); 
    if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);
        
    try {
        var config = {
            method: 'get',
            url: `https://fs.tokopedia.net/inventory/v1/fs/${dataParams['id']}/product/info?product_id=${dataQuery['product_id']}`,
            headers: { 
              'Authorization': process.env.APIKEY_TOKOPEDIA
            }
          };
          try {
            const results=await axios(config);
            return res.status(200).send(results.data);    
          } catch (error) {
            return res.status(400).send(error.response.data);
          }
    } catch (error) {
        res.status(400).send(error);            
    }
    return res.status(200).send(getProduct);    
}






exports.getProductVariant = async (req,res,next)=> {
    const dataQuery=req.query;
    const dataParams=req.params;
    const schemaBody = Joi.object({
    cat_id: Joi.string().required(),
    });
    const errorBody = schemaBody.validate(dataQuery); 
    if (errorBody.error) return res.status(400).send(errorBody.error.details[0].message);
        
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



    