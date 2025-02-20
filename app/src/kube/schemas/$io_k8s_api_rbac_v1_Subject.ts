export const $io_k8s_api_rbac_v1_Subject = {
	description: `Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.`,
	properties: {
		apiGroup: {
	type: 'string',
	description: `APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.`,
},
		kind: {
	type: 'string',
	description: `Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name of the object being referenced.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.`,
},
	},
} as const;