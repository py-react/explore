export const $io_k8s_api_autoscaling_v2_ContainerResourceMetricStatus = {
	description: `ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.`,
	properties: {
		container: {
	type: 'string',
	description: `container is the name of the container in the pods of the scaling target`,
	isRequired: true,
},
		current: {
	type: 'io_k8s_api_autoscaling_v2_MetricValueStatus',
	description: `current contains the current value for the given metric`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `name is the name of the resource in question.`,
	isRequired: true,
},
	},
} as const;