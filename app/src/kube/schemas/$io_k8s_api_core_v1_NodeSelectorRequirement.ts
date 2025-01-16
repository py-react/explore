export const $io_k8s_api_core_v1_NodeSelectorRequirement = {
	description: `A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `The label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
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