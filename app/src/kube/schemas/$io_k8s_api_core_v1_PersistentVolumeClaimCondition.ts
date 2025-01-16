export const $io_k8s_api_core_v1_PersistentVolumeClaimCondition = {
	description: `PersistentVolumeClaimCondition contains details about state of pvc`,
	properties: {
		lastProbeTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastProbeTime is the time we probed the condition.`,
},
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastTransitionTime is the time the condition transitioned from one status to another.`,
},
		message: {
	type: 'string',
	description: `message is the human-readable message indicating details about last transition.`,
},
		reason: {
	type: 'string',
	description: `reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized.`,
},
		status: {
	type: 'string',
	isRequired: true,
},
		type: {
	type: 'string',
	isRequired: true,
},
	},
} as const;