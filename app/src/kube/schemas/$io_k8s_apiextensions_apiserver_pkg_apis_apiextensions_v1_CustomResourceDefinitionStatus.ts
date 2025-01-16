export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionStatus = {
	description: `CustomResourceDefinitionStatus indicates the state of the CustomResourceDefinition`,
	properties: {
		acceptedNames: {
	type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionNames',
	description: `acceptedNames are the names that are actually being used to serve discovery. They may be different than the names in spec.`,
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition',
	},
},
		storedVersions: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;