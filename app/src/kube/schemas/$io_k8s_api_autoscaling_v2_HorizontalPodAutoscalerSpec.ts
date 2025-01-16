export const $io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerSpec = {
	description: `HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.`,
	properties: {
		behavior: {
	type: 'io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerBehavior',
	description: `behavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively). If not set, the default HPAScalingRules for scale up and scale down are used.`,
},
		maxReplicas: {
	type: 'number',
	description: `maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.`,
	isRequired: true,
	format: 'int32',
},
		metrics: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_autoscaling_v2_MetricSpec',
	},
},
		minReplicas: {
	type: 'number',
	description: `minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.`,
	format: 'int32',
},
		scaleTargetRef: {
	type: 'io_k8s_api_autoscaling_v2_CrossVersionObjectReference',
	description: `scaleTargetRef points to the target resource to scale, and is used to the pods for which metrics should be collected, as well as to actually change the replica count.`,
	isRequired: true,
},
	},
} as const;