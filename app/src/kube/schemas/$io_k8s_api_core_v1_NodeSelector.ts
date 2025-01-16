export const $io_k8s_api_core_v1_NodeSelector = {
	description: `A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.`,
	properties: {
		nodeSelectorTerms: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_NodeSelectorTerm',
	},
	isRequired: true,
},
	},
} as const;