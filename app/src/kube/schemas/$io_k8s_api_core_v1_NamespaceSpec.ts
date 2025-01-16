export const $io_k8s_api_core_v1_NamespaceSpec = {
	description: `NamespaceSpec describes the attributes on a Namespace.`,
	properties: {
		finalizers: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;