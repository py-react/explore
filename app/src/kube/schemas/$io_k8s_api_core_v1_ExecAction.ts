export const $io_k8s_api_core_v1_ExecAction = {
	description: `ExecAction describes a "run in container" action.`,
	properties: {
		command: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;