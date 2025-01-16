export const $io_k8s_api_autoscaling_v2_ExternalMetricStatus = {
	description: `ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.`,
	properties: {
		current: {
	type: 'io_k8s_api_autoscaling_v2_MetricValueStatus',
	description: `current contains the current value for the given metric`,
	isRequired: true,
},
		metric: {
	type: 'io_k8s_api_autoscaling_v2_MetricIdentifier',
	description: `metric identifies the target metric by name and selector`,
	isRequired: true,
},
	},
} as const;