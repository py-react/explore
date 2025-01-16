import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * MetricValueStatus holds the current value for a metric
 */
export type io_k8s_api_autoscaling_v2_MetricValueStatus = {
	/**
	 * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
	 */
	averageUtilization?: number;
	/**
	 * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
	 */
	averageValue?: io_k8s_apimachinery_pkg_api_resource_Quantity;
	/**
	 * value is the current value of the metric (as a quantity).
	 */
	value?: io_k8s_apimachinery_pkg_api_resource_Quantity;
};

