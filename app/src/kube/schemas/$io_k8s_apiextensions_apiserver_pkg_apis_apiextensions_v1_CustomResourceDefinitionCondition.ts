export const $io_k8s_apiextensions_apiserver_pkg_apis_apiextensions_v1_CustomResourceDefinitionCondition = {
	description: `CustomResourceDefinitionCondition contains details for the current condition of this pod.`,
	properties: {
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastTransitionTime last time the condition transitioned from one status to another.`,
},
		message: {
	type: 'string',
	description: `message is a human-readable message indicating details about last transition.`,
},
		reason: {
	type: 'string',
	description: `reason is a unique, one-word, CamelCase reason for the condition's last transition.`,
},
		status: {
	type: 'string',
	description: `status is the status of the condition. Can be True, False, Unknown.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `type is the type of the condition. Types include Established, NamesAccepted and Terminating.`,
	isRequired: true,
},
	},
} as const;