'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pangolinSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: Number },
  phrase: { type : Array , default : [] },
  createdAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('createWallet', pangolinSchema);