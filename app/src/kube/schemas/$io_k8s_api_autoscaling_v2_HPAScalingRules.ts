export const $io_k8s_api_autoscaling_v2_HPAScalingRules = {
	description: `HPAScalingRules configures the scaling behavior for one direction. These Rules are applied after calculating DesiredReplicas from metrics for the HPA. They can limit the scaling velocity by specifying scaling policies. They can prevent flapping by specifying the stabilization window, so that the number of replicas is not set instantly, instead, the safest value from the stabilization window is chosen.`,
	properties: {
		policies: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_autoscaling_v2_HPAScalingPolicy',
	},
},
		selectPolicy: {
	type: 'string',
	description: `selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.`,
},
		stabilizationWindowSeconds: {
	type: 'number',
	description: `stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).`,
	format: 'int32',
},
	},
} as const;