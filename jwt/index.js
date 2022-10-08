const jwt = require('jsonwebtoken');
const config = require('config');

function generateAccessToken(username) {
    return jwt.sign(username, config.get('TOKEN_SECRET'), { algorithm: "HS256" });
  }


  
function decodeToken(token) {
  return jwt.verify(token, config.get('TOKEN_SECRET'));
}

  


  module.exports.generateAccessToken = generateAccessToken;
  module.exports.decodeToken = decodeToken;
  
  
