export const $io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition = {
	description: `APIServiceCondition describes the state of an APIService at a particular point`,
	properties: {
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
	description: `Status is the status of the condition. Can be True, False, Unknown.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type is the type of the condition.`,
	isRequired: true,
},
	},
} as const;