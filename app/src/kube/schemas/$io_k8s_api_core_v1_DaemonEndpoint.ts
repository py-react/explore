export const $io_k8s_api_core_v1_DaemonEndpoint = {
	description: `DaemonEndpoint contains information about a single Daemon endpoint.`,
	properties: {
		Port: {
	type: 'number',
	description: `Port number of the given endpoint.`,
	isRequired: true,
	format: 'int32',
},
	},
} as const;