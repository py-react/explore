export const $io_k8s_api_node_v1_Scheduling = {
	description: `Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.`,
	properties: {
		nodeSelector: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		tolerations: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_Toleration',
	},
},
	},
} as const;