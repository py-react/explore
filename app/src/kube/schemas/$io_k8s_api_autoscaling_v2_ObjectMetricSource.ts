export const $io_k8s_api_autoscaling_v2_ObjectMetricSource = {
	description: `ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).`,
	properties: {
		describedObject: {
	type: 'io_k8s_api_autoscaling_v2_CrossVersionObjectReference',
	description: `describedObject specifies the descriptions of a object,such as kind,name apiVersion`,
	isRequired: true,
},
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