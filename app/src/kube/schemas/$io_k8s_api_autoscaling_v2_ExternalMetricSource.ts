export const $io_k8s_api_autoscaling_v2_ExternalMetricSource = {
	description: `ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).`,
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