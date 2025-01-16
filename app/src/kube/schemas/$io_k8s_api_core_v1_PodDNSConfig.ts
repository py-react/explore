export const $io_k8s_api_core_v1_PodDNSConfig = {
	description: `PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.`,
	properties: {
		nameservers: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		options: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodDNSConfigOption',
	},
},
		searches: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;