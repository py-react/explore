export const $io_k8s_api_apps_v1_DeploymentCondition = {
	description: `DeploymentCondition describes the state of a deployment at a certain point.`,
	properties: {
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Last time the condition transitioned from one status to another.`,
},
		lastUpdateTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `The last time this condition was updated.`,
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
	description: `Type of deployment condition.`,
	isRequired: true,
},
	},
} as const;