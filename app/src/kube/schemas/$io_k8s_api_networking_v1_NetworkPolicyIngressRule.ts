export const $io_k8s_api_networking_v1_NetworkPolicyIngressRule = {
	description: `NetworkPolicyIngressRule describes a particular set of traffic that is allowed to the pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and from.`,
	properties: {
		from: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_NetworkPolicyPeer',
	},
},
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_NetworkPolicyPort',
	},
},
	},
} as const;