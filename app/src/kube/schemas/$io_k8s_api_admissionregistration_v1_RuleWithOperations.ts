export const $io_k8s_api_admissionregistration_v1_RuleWithOperations = {
	description: `RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid.`,
	properties: {
		apiGroups: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		apiVersions: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		operations: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		resources: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		scope: {
	type: 'string',
	description: `scope specifies the scope of this rule. Valid values are "Cluster", "Namespaced", and "*" "Cluster" means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. "Namespaced" means that only namespaced resources will match this rule. "*" means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is "*".`,
},
	},
} as const;