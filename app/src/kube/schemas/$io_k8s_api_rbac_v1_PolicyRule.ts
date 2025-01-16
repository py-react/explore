export const $io_k8s_api_rbac_v1_PolicyRule = {
	description: `PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.`,
	properties: {
		apiGroups: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		nonResourceURLs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		resourceNames: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		resources: {
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