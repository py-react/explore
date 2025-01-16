import type { io_k8s_api_autoscaling_v2_CrossVersionObjectReference } from './io_k8s_api_autoscaling_v2_CrossVersionObjectReference';
import type { io_k8s_api_autoscaling_v2_MetricIdentifier } from './io_k8s_api_autoscaling_v2_MetricIdentifier';
import type { io_k8s_api_autoscaling_v2_MetricValueStatus } from './io_k8s_api_autoscaling_v2_MetricValueStatus';

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export type io_k8s_api_autoscaling_v2_ObjectMetricStatus = {
	/**
	 * current contains the current value for the given metric
	 */
	current: io_k8s_api_autoscaling_v2_MetricValueStatus;
	/**
	 * DescribedObject specifies the descriptions of a object,such as kind,name apiVersion
	 */
	describedObject: io_k8s_api_autoscaling_v2_CrossVersionObjectReference;
	/**
	 * metric identifies the target metric by name and selector
	 */
	metric: io_k8s_api_autoscaling_v2_MetricIdentifier;
};

