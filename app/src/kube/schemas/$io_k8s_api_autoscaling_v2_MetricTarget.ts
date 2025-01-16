export const $io_k8s_api_autoscaling_v2_MetricTarget = {
	description: `MetricTarget defines the target value, average value, or average utilization of a specific metric`,
	properties: {
		averageUtilization: {
	type: 'number',
	description: `averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type`,
	format: 'int32',
},
		averageValue: {
	type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	description: `averageValue is the target value of the average of the metric across all relevant pods (as a quantity)`,
},
		type: {
	type: 'string',
	description: `type represents whether the metric type is Utilization, Value, or AverageValue`,
	isRequired: true,
},
		value: {
	type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	description: `value is the target value of the metric (as a quantity).`,
},
	},
} as const;