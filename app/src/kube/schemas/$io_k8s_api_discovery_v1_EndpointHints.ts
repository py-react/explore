export const $io_k8s_api_discovery_v1_EndpointHints = {
	description: `EndpointHints provides hints describing how an endpoint should be consumed.`,
	properties: {
		forZones: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_discovery_v1_ForZone',
	},
},
	},
} as const;