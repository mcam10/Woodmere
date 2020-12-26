const mongoose  = require('mongoose');
const Schema = mongoose.schema;

const post = {

  title: {

   type: String,
    required: true	  

  },
  
  body: {

   type: String,
    required: true	  

  },	

  author: {

   type: String,
    required: true	  

  },

 date: {
	type: Date,
	 default: Date.now 

 }	

};

const PostSchema = new Schema(post);

module.export = mongoose.model('posts', PostSchema);
