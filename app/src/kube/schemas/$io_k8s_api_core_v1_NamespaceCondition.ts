export const $io_k8s_api_core_v1_NamespaceCondition = {
	description: `NamespaceCondition contains details about state of namespace.`,
	properties: {
		lastTransitionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
},
		message: {
	type: 'string',
},
		reason: {
	type: 'string',
},
		status: {
	type: 'string',
	description: `Status of the condition, one of True, False, Unknown.`,
	isRequired: true,
},
		type: {
	type: 'string',
	description: `Type of namespace controller condition.`,
	isRequired: true,
},
	},
} as const;