module.exports = {
	
		// -------------------------
		// IA
		db: {
			development: {
				mongo: {
					host: "mongodb://localhost/<db>",
					port: 28015,
					db: "mabi2"
				}
			},
			production: {
				mongo: {
					host: "mongodb://localhost/<db>",
					port: 53352,
					db: "mabi"
				}
			}     
		}
	};
	
