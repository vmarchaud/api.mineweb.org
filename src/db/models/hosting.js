module.exports = {
  identity: 'hosting',
  connection: 'default',
  
  attributes: {
		id : {
			type: 'integer',
			unique: true,
    	autoIncrement: true,
    	primaryKey: true,
		},

		user: {
			model: 'User',
			required: true
		},

		key: {
			type: 'string',
			unique: true,
      defaultsTo: function () {
				return uuid.v4().substr(4, 24);
			},
      size: 19
		},

		state: {
			type: 'boolean',
			defaultsTo: true
		},

    hostType: {
			type: 'string',
			required: true,
      defaultsTo: 'SUBDOMAIN',
			in: ['SUBDOMAIN', 'DOMAIN'],
      size: 9
		},

		host: {
			type: 'string',
      required: true
		},

		secretKey: {
			type: 'string',
			alphanumeric: true
		},

    endDate: {
			type: 'datetime',
      defaultsTo: function () {
        var d = new Date();
        d.setMonth(d.getMonth() + 1);
        return d;
      }
		},

		suspended: {
			type: 'text',
			defaultsTo: null
		},

    purchase: {
      model: 'Purchase'
    }
  },
}