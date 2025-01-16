export const $io_k8s_api_core_v1_NodeSelectorTerm = {
	description: `A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_NodeSelectorRequirement',
	},
},
		matchFields: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_NodeSelectorRequirement',
	},
},
	},
} as const;