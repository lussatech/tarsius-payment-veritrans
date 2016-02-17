/**
 * CrmPaymentVeritrans.js
 */

module.exports = {
	schema : true,
	attributes: {
		// attribute
		status_code : 'string',
		status_message : 'string',
		// transaction
		transaction_id : 'string',
		transaction_status : {
			type: 'string',
			enum: [
				'authorize',
				'capture',
				'settlement',
				'deny',
				'pending',
				'cancel',
				'expire'
			]
		},
		fraud_status : {
			type: 'string',
			enum: [
				'accept',
				'challange',
				'deny'
			]
		},
		approval_code : 'string',

		// or order id
		bill : { model : 'PosOrderBill' },
		order : { model: 'CrmOrderRequest' }
    }
};
