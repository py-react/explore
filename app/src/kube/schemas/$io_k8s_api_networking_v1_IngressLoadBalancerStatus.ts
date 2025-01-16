export const $io_k8s_api_networking_v1_IngressLoadBalancerStatus = {
	description: `IngressLoadBalancerStatus represents the status of a load-balancer.`,
	properties: {
		ingress: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_IngressLoadBalancerIngress',
	},
},
	},
} as const;