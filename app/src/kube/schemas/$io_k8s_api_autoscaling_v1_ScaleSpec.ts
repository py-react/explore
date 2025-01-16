export const $io_k8s_api_autoscaling_v1_ScaleSpec = {
	description: `ScaleSpec describes the attributes of a scale subresource.`,
	properties: {
		replicas: {
	type: 'number',
	description: `replicas is the desired number of instances for the scaled object.`,
	format: 'int32',
},
	},
} as const;