export const $io_k8s_api_core_v1_NodeCondition = {
	description: `NodeCondition contains condition information for a node.`,
	properties: {
		lastHeartbeatTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Last time we got an update on a given condition.`,
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
	description: `Type of node condition.`,
	isRequired: true,
},
	},
} as const;