export const $io_k8s_api_core_v1_PodAntiAffinity = {
	description: `Pod anti affinity is a group of inter pod anti affinity scheduling rules.`,
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