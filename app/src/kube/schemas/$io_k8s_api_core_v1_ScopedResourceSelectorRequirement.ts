export const $io_k8s_api_core_v1_ScopedResourceSelectorRequirement = {
	description: `A scoped-resource selector requirement is a selector that contains values, a scope name, and an operator that relates the scope name and values.`,
	properties: {
		operator: {
	type: 'Enum',
	isRequired: true,
},
		scopeName: {
	type: 'Enum',
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;