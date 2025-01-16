export const $io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition = {
	description: `HorizontalPodAutoscalerCondition describes the state of a HorizontalPodAutoscaler at a certain point.`,
	properties: {
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastTransitionTime is the last time the condition transitioned from one status to another`,
},
		message: {
	type: 'string',
	description: `message is a human-readable explanation containing details about the transition`,
},
		reason: {
	type: 'string',
	description: `reason is the reason for the condition's last transition.`,
},
		status: {
	type: 'string',
	description: `status is the status of the condition (True, False, Unknown)`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `type describes the current condition`,
	isRequired: true,
},
	},
} as const;