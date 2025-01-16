export const $io_k8s_api_core_v1_ServiceStatus = {
	description: `ServiceStatus represents the current status of a service.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Condition',
	},
},
		loadBalancer: {
	type: 'io_k8s_api_core_v1_LoadBalancerStatus',
	description: `LoadBalancer contains the current status of the load-balancer, if one is present.`,
},
	},
} as const;