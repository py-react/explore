export const $io_k8s_api_networking_v1_NetworkPolicyEgressRule = {
	description: `NetworkPolicyEgressRule describes a particular set of traffic that is allowed out of pods matched by a NetworkPolicySpec's podSelector. The traffic must match both ports and to. This type is beta-level in 1.8`,
	properties: {
		ports: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_NetworkPolicyPort',
	},
},
		to: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_networking_v1_NetworkPolicyPeer',
	},
},
	},
} as const;