export const $io_k8s_api_autoscaling_v1_HorizontalPodAutoscalerStatus = {
	description: `current status of a horizontal pod autoscaler`,
	properties: {
		currentCPUUtilizationPercentage: {
	type: 'number',
	description: `currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU.`,
	format: 'int32',
},
		currentReplicas: {
	type: 'number',
	description: `currentReplicas is the current number of replicas of pods managed by this autoscaler.`,
	isRequired: true,
	format: 'int32',
},
		desiredReplicas: {
	type: 'number',
	description: `desiredReplicas is the  desired number of replicas of pods managed by this autoscaler.`,
	isRequired: true,
	format: 'int32',
},
		lastScaleTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `lastScaleTime is the last time the HorizontalPodAutoscaler scaled the number of pods; used by the autoscaler to control how often the number of pods is changed.`,
},
		observedGeneration: {
	type: 'number',
	description: `observedGeneration is the most recent generation observed by this autoscaler.`,
	format: 'int64',
},
	},
} as const;