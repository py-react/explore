export const $io_k8s_api_core_v1_ResourceRequirements = {
	description: `ResourceRequirements describes the compute resource requirements.`,
	properties: {
		claims: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ResourceClaim',
	},
},
		limits: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		requests: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
	},
} as const;