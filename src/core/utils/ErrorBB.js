
let err = {
	NotFound:{name:'The document that you are looking doesn\'t exist', code: 'NotFound'},
	NotMatchParams:{name:'The document that you are looking to save doesn\'t have the right params', code: 'NotFound'}
}

class errBB extends Error{
	constructor (_code, _alternative_txt = '') {

		let message  = err[_code].name;
		if(_alternative_txt != '') {
			message += ' ' + _alternative_txt;
		}

		
		let code 				= err[_code].code;
		super(message);
		Error.captureStackTrace(this, this.constructor);
		this.name 			= code 			|| this.constructor.name;
		this.status 		= message 	|| 'Error';	
	}
}


//-----------------------------------
//-----------------------------------
//-----------------------------------

module.exports = {
	errBB
}