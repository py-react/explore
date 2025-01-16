import type { io_k8s_api_autoscaling_v2_MetricIdentifier } from './io_k8s_api_autoscaling_v2_MetricIdentifier';
import type { io_k8s_api_autoscaling_v2_MetricTarget } from './io_k8s_api_autoscaling_v2_MetricTarget';

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export type io_k8s_api_autoscaling_v2_PodsMetricSource = {
	/**
	 * metric identifies the target metric by name and selector
	 */
	metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
	/**
	 * target specifies the target value for the given metric
	 */
	target: io_k8s_api_autoscaling_v2_MetricTarget;
};

