export const $io_k8s_api_core_v1_ReplicationControllerSpec = {
	description: `ReplicationControllerSpec is the specification of a replication controller.`,
	properties: {
		minReadySeconds: {
	type: 'number',
	description: `Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)`,
	format: 'int32',
},
		replicas: {
	type: 'number',
	description: `Replicas is the number of desired replicas. This is a pointer to distinguish between explicit zero and unspecified. Defaults to 1. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller`,
	format: 'int32',
},
		selector: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		template: {
	type: 'io_k8s_api_core_v1_PodTemplateSpec',
	description: `Template is the object that describes the pod that will be created if insufficient replicas are detected. This takes precedence over a TemplateRef. The only allowed template.spec.restartPolicy value is "Always". More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#pod-template`,
},
	},
} as const;