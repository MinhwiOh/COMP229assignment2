import mongoose from 'mongoose'
import crypto from 'crypto'
//const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },

  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  price: { type: Number },
  quantity: { type: Number }
});


export default mongoose.model('Product', ProductSchema);

