const firebase = require('firebase-admin');
firebase.initializeApp();  
exports.database = firebase;