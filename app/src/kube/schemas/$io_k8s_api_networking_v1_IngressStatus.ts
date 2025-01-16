export const $io_k8s_api_networking_v1_IngressStatus = {
	description: `IngressStatus describe the current state of the Ingress.`,
	properties: {
		loadBalancer: {
	type: 'io_k8s_api_networking_v1_IngressLoadBalancerStatus',
	description: `loadBalancer contains the current status of the load-balancer.`,
},
	},
} as const;