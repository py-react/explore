export const $io_k8s_api_core_v1_PodAffinity = {
	description: `Pod affinity is a group of inter pod affinity scheduling rules.`,
	properties: {
		preferredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_WeightedPodAffinityTerm',
	},
},
		requiredDuringSchedulingIgnoredDuringExecution: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PodAffinityTerm',
	},
},
	},
} as const;