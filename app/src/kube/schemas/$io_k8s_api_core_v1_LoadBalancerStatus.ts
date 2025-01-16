export const $io_k8s_api_core_v1_LoadBalancerStatus = {
	description: `LoadBalancerStatus represents the status of a load-balancer.`,
	properties: {
		ingress: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_LoadBalancerIngress',
	},
},
	},
} as const;