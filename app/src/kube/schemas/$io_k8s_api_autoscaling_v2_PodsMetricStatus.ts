export const $io_k8s_api_autoscaling_v2_PodsMetricStatus = {
	description: `PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).`,
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