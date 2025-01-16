export const $io_k8s_api_batch_v1_PodFailurePolicyOnPodConditionsPattern = {
	description: `PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.`,
	properties: {
		status: {
	type: 'string',
	description: `Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.`,
	isRequired: true,
},
	},
} as const;