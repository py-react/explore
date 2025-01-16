export const $io_k8s_api_core_v1_LimitRangeItem = {
	description: `LimitRangeItem defines a min/max usage limit for any resource that matches on kind.`,
	properties: {
		default: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		defaultRequest: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		max: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		maxLimitRequestRatio: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		min: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		type: {
	type: 'string',
	description: `Type of resource that this limit applies to.`,
	isRequired: true,
},
	},
} as const;