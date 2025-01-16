export const $io_k8s_api_core_v1_NamespaceStatus = {
	description: `NamespaceStatus is information about the current status of a Namespace.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_NamespaceCondition',
	},
},
		phase: {
	type: 'Enum',
},
	},
} as const;