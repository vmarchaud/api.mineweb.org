module.exports = {
  identity: 'theme',
  connection: 'default',
  
  attributes: {
    id: {
			type: 'number',
			required: true,
			unique: true,
    	autoIncrement: true,
    	primaryKey: true,
		},

		slug: {
			type: 'string',
			unique: true,
			required: true,
      min: 5,
      max: 20,
      size: 20
		},

		author: {
			model: 'User',
			required: true
		},

		description: {
			type: 'string',
			required: true
		},

		img: {
			type: 'string',
			url: true,
			required: true
		},

    version : {
      type: 'string'
    },

		versions: {
			type: 'json',
			required: true
		},

		supported: {
			type: 'json',
			defaultsTo: { 'CMS': '1.0.0' }
		},

		official: {
			type: 'boolean',
			defaultsTo: false
		},

		downloads: {
			type: 'integer',
			defaultTo: 0
		},

		price: {
			type: 'float',
			defaultsTo: 0.0
		}
  },
}