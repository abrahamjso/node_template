'use strict'

const moment = require('moment');

// errBB

Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

Object.isNull = function(obj){
	if(Object.size(obj) > 0) return false
	else return true;
}



let Validator = {
	data			: undefined,
	validateSchema: function(_schema, obj){

	}
}


// Adblock
const adBlockDimension = {
	1: '320x480', 
	2: '300x400', 
	3: '300x250', 
	4: '300x600'
};


let errIA = (message) => {
	this.name = 'My Error';
	this.message = message || 'My Error';
	this.stack = (new Error()).stack;
}

errIA.prototype = Object.create(Error.prototype);
errIA.prototype.constructor = errIA;


let errBB = {
	status 				: undefined,
	code 					: undefined,
	message 			: undefined,
	data 					: {},
	_obj					: {},

	// Public Functions
	setObj: function(obj){
		this._obj = obj;
	},

	// Private Functions
	getErrType: function(intType){
		switch(intType) {

			case 0:
				this.status = 'fail';
				this.code = 45;
				this.message = 'You miss one of the params';
				break;

			case 1:
				this.status = 'fail';
				this.code = 46;
				this.message = 'The params are nulls';
				break;

			default:
				return this;
		}
		return this;
	} 
}

module.exports = {
	errIA,
	errBB,
	Object,
	Validator,
	adBlockDimension
};
