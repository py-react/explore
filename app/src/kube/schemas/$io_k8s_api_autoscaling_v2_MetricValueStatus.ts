export const $io_k8s_api_autoscaling_v2_MetricValueStatus = {
	description: `MetricValueStatus holds the current value for a metric`,
	properties: {
		averageUtilization: {
	type: 'number',
	description: `currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.`,
	format: 'int32',
},
		averageValue: {
	type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	description: `averageValue is the current value of the average of the metric across all relevant pods (as a quantity)`,
},
		value: {
	type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	description: `value is the current value of the metric (as a quantity).`,
},
	},
} as const;