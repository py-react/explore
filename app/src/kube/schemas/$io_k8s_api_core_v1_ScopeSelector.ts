export const $io_k8s_api_core_v1_ScopeSelector = {
	description: `A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.`,
	properties: {
		matchExpressions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ScopedResourceSelectorRequirement',
	},
},
	},
} as const;