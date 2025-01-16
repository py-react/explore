export const $io_k8s_api_core_v1_TopologySelectorLabelRequirement = {
	description: `A topology selector requirement is a selector that matches given label. This is an alpha feature and may change in the future.`,
	properties: {
		key: {
	type: 'string',
	description: `The label key that the selector applies to.`,
	isRequired: true,
},
		values: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
	},
} as const;