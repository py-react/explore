export const $io_k8s_api_networking_v1_IngressClassParametersReference = {
	description: `IngressClassParametersReference identifies an API object. This can be used to specify a cluster or namespace-scoped resource.`,
	properties: {
		apiGroup: {
	type: 'string',
	description: `apiGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.`,
},
		kind: {
	type: 'string',
	description: `kind is the type of resource being referenced.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `name is the name of resource being referenced.`,
	isRequired: true,
},
		namespace: {
	type: 'string',
	description: `namespace is the namespace of the resource being referenced. This field is required when scope is set to "Namespace" and must be unset when scope is set to "Cluster".`,
},
		scope: {
	type: 'string',
	description: `scope represents if this refers to a cluster or namespace scoped resource. This may be set to "Cluster" (default) or "Namespace".`,
},
	},
} as const;