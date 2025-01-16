export const $io_k8s_api_autoscaling_v2_ObjectMetricStatus = {
	description: `ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).`,
	properties: {
		current: {
	type: 'io_k8s_api_autoscaling_v2_MetricValueStatus',
	description: `current contains the current value for the given metric`,
	isRequired: true,
},
		describedObject: {
	type: 'io_k8s_api_autoscaling_v2_CrossVersionObjectReference',
	description: `DescribedObject specifies the descriptions of a object,such as kind,name apiVersion`,
	isRequired: true,
},
		metric: {
	type: 'io_k8s_api_autoscaling_v2_MetricIdentifier',
	description: `metric identifies the target metric by name and selector`,
	isRequired: true,
},
	},
} as const;