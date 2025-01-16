export const $io_k8s_api_core_v1_PodReadinessGate = {
	description: `PodReadinessGate contains the reference to a pod condition`,
	properties: {
		conditionType: {
	type: 'string',
	description: `ConditionType refers to a condition in the pod's condition list with matching type.`,
	isRequired: true,
},
	},
} as const;