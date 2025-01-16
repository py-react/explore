export const $io_k8s_api_core_v1_LoadBalancerIngress = {
	description: `LoadBalancerIngress represents the status of a load-balancer ingress point: traffic intended for the service should be sent to an ingress point.`,
	properties: {
		hostname: {
	type: 'string',
	description: `Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)`,
},
		ip: {
	type: 'string',
	description: `IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)`,
},
		ipMode: {
	type: 'string',
	description: `IPMode specifies how the load-balancer IP behaves, and may only be specified when the ip field is specified. Setting this to "VIP" indicates that traffic is delivered to the node with the destination set to the load-balancer's IP and port. Setting this to "Proxy" indicates that traffic is delivered to the node or pod with the destination set to the node's IP and node port or the pod's IP and port. Service implementations may use this information to adjust traffic routing.`,
},
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PortStatus',
	},
},
	},
} as const;