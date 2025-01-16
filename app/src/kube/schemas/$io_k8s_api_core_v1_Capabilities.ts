export const $io_k8s_api_core_v1_Capabilities = {
	description: `Adds and removes POSIX capabilities from running containers.`,
	properties: {
		add: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		drop: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;