export const $io_k8s_api_core_v1_NodeAddress = {
	description: `NodeAddress contains information for the node's address.`,
	properties: {
		address: {
	type: 'string',
	description: `The node address.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Node address type, one of Hostname, ExternalIP or InternalIP.`,
	isRequired: true,
},
	},
} as const;