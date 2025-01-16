export const $io_k8s_api_authorization_v1_NonResourceRule = {
	description: `NonResourceRule holds information that describes a rule for the non-resource`,
	properties: {
		nonResourceURLs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		verbs: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
	},
} as const;