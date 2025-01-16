import type { io_k8s_api_autoscaling_v1_CrossVersionObjectReference } from './io_k8s_api_autoscaling_v1_CrossVersionObjectReference';

/**
 * specification of a horizontal pod autoscaler.
 */
export type io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerSpec = {
	/**
	 * maxReplicas is the upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas.
	 */
	maxReplicas: number;
	/**
	 * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
	 */
	minReplicas?: number;
	/**
	 * reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource.
	 */
	scaleTargetRef: io_k8s_api_autoscaling_v1_CrossVersionObjectReference;
	/**
	 * targetCPUUtilizationPercentage is the target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used.
	 */
	targetCPUUtilizationPercentage?: number;
};

