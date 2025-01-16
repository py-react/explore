export const $io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceStatus = {
	description: `APIServiceStatus contains derived information about an API server`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_kube_aggregator_pkg_apis_apiregistration_v1_APIServiceCondition',
	},
},
	},
} as const;