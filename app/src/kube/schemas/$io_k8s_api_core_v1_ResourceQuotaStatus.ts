export const $io_k8s_api_core_v1_ResourceQuotaStatus = {
	description: `ResourceQuotaStatus defines the enforced hard limits and observed use.`,
	properties: {
		hard: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		used: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
	},
} as const;