export const $io_k8s_api_rbac_v1_RoleRef = {
	description: `RoleRef contains information that points to the role being used`,
	properties: {
		apiGroup: {
	type: 'string',
	description: `APIGroup is the group for the resource being referenced`,
	isRequired: true,
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