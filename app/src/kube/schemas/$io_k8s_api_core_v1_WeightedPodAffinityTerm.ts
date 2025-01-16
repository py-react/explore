export const $io_k8s_api_core_v1_WeightedPodAffinityTerm = {
	description: `The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)`,
	properties: {
		podAffinityTerm: {
	type: 'io_k8s_api_core_v1_PodAffinityTerm',
	description: `Required. A pod affinity term, associated with the corresponding weight.`,
	isRequired: true,
},
		weight: {
	type: 'number',
	description: `weight associated with matching the corresponding podAffinityTerm, in the range 1-100.`,
	isRequired: true,
	format: 'int32',
},
	},
} as const;