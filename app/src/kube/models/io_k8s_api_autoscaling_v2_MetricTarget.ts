import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export type io_k8s_api_autoscaling_v2_MetricTarget = {
	/**
	 * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
	 */
	averageUtilization?: number;
	/**
	 * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
	 */
	averageValue?: io_k8s_apimachinery_pkg_api_resource_Quantity;
	/**
	 * type represents whether the metric type is Utilization, Value, or AverageValue
	 */
	type: string;
	/**
	 * value is the target value of the metric (as a quantity).
	 */
	value?: io_k8s_apimachinery_pkg_api_resource_Quantity;
};

