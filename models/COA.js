const mongoose = require('mongoose');
// require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;
const COASchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },    
    currency_code: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    category_id: {
        type: String,
        required: true,
    },
    balance_amount: {
        type: SchemaTypes.Decimal128,
        required: true,
    },
    parent_id: {
        type: SchemaTypes.Number,
    },

    created_at: {
        type: Date,
        default: Date.now
    }
});



module.exports = mongoose.model('coa', COASchema);

