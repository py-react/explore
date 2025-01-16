export const $io_k8s_api_core_v1_ResourceQuotaSpec = {
	description: `ResourceQuotaSpec defines the desired hard limits to enforce for Quota.`,
	properties: {
		hard: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		scopeSelector: {
	type: 'io_k8s_api_core_v1_ScopeSelector',
	description: `scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.`,
},
		scopes: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
	},
} as const;