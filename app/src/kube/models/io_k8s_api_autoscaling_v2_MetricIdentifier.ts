import type { io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector } from './io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector';

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export type io_k8s_api_autoscaling_v2_MetricIdentifier = {
	/**
	 * name is the name of the given metric
	 */
	name: string;
	/**
	 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
	 */
	selector?: io_k8s_apimachinery_pkg_apis_meta_v1_LabelSelector;
};

