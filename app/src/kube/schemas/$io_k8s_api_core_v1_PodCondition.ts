export const $io_k8s_api_core_v1_PodCondition = {
	description: `PodCondition contains details for the current condition of this pod.`,
	properties: {
		lastProbeTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Last time we probed the condition.`,
},
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Last time the condition transitioned from one status to another.`,
},
		message: {
	type: 'string',
	description: `Human-readable message indicating details about last transition.`,
},
		reason: {
	type: 'string',
	description: `Unique, one-word, CamelCase reason for the condition's last transition.`,
},
		status: {
	type: 'string',
	description: `Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions`,
	isRequired: true,
},
	},
} as const;