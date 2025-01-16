export const $io_k8s_api_batch_v1_JobCondition = {
	description: `JobCondition describes current state of a job.`,
	properties: {
		lastProbeTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Last time the condition was checked.`,
},
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Last time the condition transit from one status to another.`,
},
		message: {
	type: 'string',
	description: `Human readable message indicating details about last transition.`,
},
		reason: {
	type: 'string',
	description: `(brief) reason for the condition's last transition.`,
},
		status: {
	type: 'string',
	description: `Status of the condition, one of True, False, Unknown.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type of job condition, Complete or Failed.`,
	isRequired: true,
},
	},
} as const;