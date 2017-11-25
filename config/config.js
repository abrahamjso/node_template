module.exports = {
	
		// -------------------------
		// IA
		db: {
			development: {
				mongo: {
					host: "mongodb://localhost/mabi3",
					port: 28015,
					db: "mabi2"
				}
			},
			production: {
				mongo: {
					host: "mongodb://<user>:<password>@ds153352.mlab.com:53352/mabi",
					port: 53352,
					db: "mabi"
				}
			}     
		}
	};
	
