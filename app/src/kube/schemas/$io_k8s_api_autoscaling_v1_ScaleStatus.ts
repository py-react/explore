export const $io_k8s_api_autoscaling_v1_ScaleStatus = {
	description: `ScaleStatus represents the current status of a scale subresource.`,
	properties: {
		replicas: {
	type: 'number',
	description: `replicas is the actual number of observed instances of the scaled object.`,
	isRequired: true,
	format: 'int32',
},
		selector: {
	type: 'string',
	description: `selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/`,
},
	},
} as const;