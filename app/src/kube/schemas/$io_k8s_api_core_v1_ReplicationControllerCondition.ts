export const $io_k8s_api_core_v1_ReplicationControllerCondition = {
	description: `ReplicationControllerCondition describes the state of a replication controller at a certain point.`,
	properties: {
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `The last time the condition transitioned from one status to another.`,
},
		message: {
	type: 'string',
	description: `A human readable message indicating details about the transition.`,
},
		reason: {
	type: 'string',
	description: `The reason for the condition's last transition.`,
},
		status: {
	type: 'string',
	description: `Status of the condition, one of True, False, Unknown.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type of replication controller condition.`,
	isRequired: true,
},
	},
} as const;