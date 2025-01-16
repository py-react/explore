export const $io_k8s_api_core_v1_TypedLocalObjectReference = {
	description: `TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.`,
	properties: {
		apiGroup: {
	type: 'string',
	description: `APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.`,
},
		kind: {
	type: 'string',
	description: `Kind is the type of resource being referenced`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the name of resource being referenced`,
	isRequired: true,
},
	},
} as const;