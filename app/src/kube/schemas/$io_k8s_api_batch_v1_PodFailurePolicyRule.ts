export const $io_k8s_api_batch_v1_PodFailurePolicyRule = {
	description: `PodFailurePolicyRule describes how a pod failure is handled when the requirements are met. One of onExitCodes and onPodConditions, but not both, can be used in each rule.`,
	properties: {
		action: {
	type: 'Enum',
	isRequired: true,
},
		onExitCodes: {
	type: 'io_k8s_api_batch_v1_PodFailurePolicyOnExitCodesRequirement',
	description: `Represents the requirement on the container exit codes.`,
},
		onPodConditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPattern',
	},
},
	},
} as const;