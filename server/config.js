module.exports = {
	mongooseServerUri: process.env.MONGO_DB_CONN_STRING || 'mongodb://localhost/plus',
	mongooseOptions: {	
		user: process.env.MONGO_DB_USER || 'plus',
		pass: process.env.MONGO_DB_PASSWORD || ''
	},
	contactFormOptions: {
		senderEmail: process.env.CONTACT_SENDER_EMAIL || 'noreply@yoursite.io',
		receiverEmail: process.env.CONTACT_RECEIVER_EMAIL || 'info@yoursite.com',
	}
};
