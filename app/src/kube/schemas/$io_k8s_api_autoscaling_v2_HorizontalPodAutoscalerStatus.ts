export const $io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerStatus = {
	description: `HorizontalPodAutoscalerStatus describes the current status of a horizontal pod autoscaler.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_autoscaling_v2_HorizontalPodAutoscalerCondition',
	},
},
		currentMetrics: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_autoscaling_v2_MetricStatus',
	},
},
		currentReplicas: {
	type: 'number',
	description: `currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler.`,
	format: 'int32',
},
		desiredReplicas: {
	type: 'number',
	description: `desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler.`,
	isRequired: true,
	format: 'int32',
},
		lastScaleTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods, used by the autoscaler to control how often the number of pods is changed.`,
},
		observedGeneration: {
	type: 'number',
	description: `observedGeneration is the most recent generation observed by this autoscaler.`,
	format: 'int64',
},
	},
} as const;