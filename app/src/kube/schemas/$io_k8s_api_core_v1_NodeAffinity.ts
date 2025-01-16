export const $io_k8s_api_core_v1_NodeAffinity = {
	description: `Node affinity is a group of node affinity scheduling rules.`,
	properties: {
		preferredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PreferredSchedulingTerm',
	},
},
		requiredDuringSchedulingIgnoredDuringExecution: {
	type: 'io_k8s_api_core_v1_NodeSelector',
	description: `If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.`,
},
	},
} as const;