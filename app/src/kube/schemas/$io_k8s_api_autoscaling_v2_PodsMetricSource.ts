export const $io_k8s_api_autoscaling_v2_PodsMetricSource = {
	description: `PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.`,
	properties: {
		metric: {
	type: 'io_k8s_api_autoscaling_v2_MetricIdentifier',
	description: `metric identifies the target metric by name and selector`,
	isRequired: true,
},
		target: {
	type: 'io_k8s_api_autoscaling_v2_MetricTarget',
	description: `target specifies the target value for the given metric`,
	isRequired: true,
},
	},
} as const;