import type { io_k8s_api_autoscaling_v2_CrossVersionObjectReference } from './io_k8s_api_autoscaling_v2_CrossVersionObjectReference';
import type { io_k8s_api_autoscaling_v2_MetricIdentifier } from './io_k8s_api_autoscaling_v2_MetricIdentifier';
import type { io_k8s_api_autoscaling_v2_MetricTarget } from './io_k8s_api_autoscaling_v2_MetricTarget';

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export type io_k8s_api_autoscaling_v2_ObjectMetricSource = {
	/**
	 * describedObject specifies the descriptions of a object,such as kind,name apiVersion
	 */
	describedObject: io_k8s_api_autoscaling_v2_CrossVersionObjectReference;
	/**
	 * metric identifies the target metric by name and selector
	 */
	metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
	/**
	 * target specifies the target value for the given metric
	 */
	target: io_k8s_api_autoscaling_v2_MetricTarget;
};

