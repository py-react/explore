export const $io_k8s_api_core_v1_TopologySelectorTerm = {
	description: `A topology selector term represents the result of label queries. A null or empty topology selector term matches no objects. The requirements of them are ANDed. It provides a subset of functionality as NodeSelectorTerm. This is an alpha feature and may change in the future.`,
	properties: {
		matchLabelExpressions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_TopologySelectorLabelRequirement',
	},
},
	},
} as const;