export const $io_k8s_api_batch_v1_PodFailurePolicy = {
	description: `PodFailurePolicy describes how failed pods influence the backoffLimit.`,
	properties: {
		rules: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_batch_v1_PodFailurePolicyRule',
	},
	isRequired: true,
},
	},
} as const;