export const $io_k8s_apimachinery_pkg_apis_meta_v1_ServerAddressByClientCIDR = {
	description: `ServerAddressByClientCIDR helps the client to determine the server address that they should use, depending on the clientCIDR that they match.`,
	properties: {
		clientCIDR: {
	type: 'string',
	description: `The CIDR with which clients can match their IP to figure out the server address that they should use.`,
	isRequired: true,
},
		serverAddress: {
	type: 'string',
	description: `Address of this server, suitable for a client that matches the above CIDR. This can be a hostname, hostname:port, IP or IP:port.`,
	isRequired: true,
},
	},
} as const;