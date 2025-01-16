export const $io_k8s_api_networking_v1_IngressLoadBalancerIngress = {
	description: `IngressLoadBalancerIngress represents the status of a load-balancer ingress point.`,
	properties: {
		hostname: {
	type: 'string',
	description: `hostname is set for load-balancer ingress points that are DNS based.`,
},
		ip: {
	type: 'string',
	description: `ip is set for load-balancer ingress points that are IP based.`,
},
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_IngressPortStatus',
	},
},
	},
} as const;