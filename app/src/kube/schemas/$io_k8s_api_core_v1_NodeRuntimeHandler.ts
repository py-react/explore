export const $io_k8s_api_core_v1_NodeRuntimeHandler = {
	description: `NodeRuntimeHandler is a set of runtime handler information.`,
	properties: {
		features: {
	type: 'io_k8s_api_core_v1_NodeRuntimeHandlerFeatures',
	description: `Supported features.`,
},
		name: {
	type: 'string',
	description: `Runtime handler name. Empty for the default runtime handler.`,
},
	},
} as const;