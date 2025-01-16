export const $io_k8s_api_authorization_v1_ResourceRule = {
	description: `ResourceRule is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.`,
	properties: {
		apiGroups: {
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