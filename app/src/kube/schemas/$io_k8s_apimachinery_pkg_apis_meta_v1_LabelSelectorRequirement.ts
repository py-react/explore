export const $io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelectorRequirement = {
	description: `A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.`,
	properties: {
		key: {
	type: 'string',
	description: `key is the label key that the selector applies to.`,
	isRequired: true,
},
		operator: {
	type: 'string',
	description: `operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.`,
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