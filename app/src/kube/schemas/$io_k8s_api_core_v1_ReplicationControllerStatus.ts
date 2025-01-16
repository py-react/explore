export const $io_k8s_api_core_v1_ReplicationControllerStatus = {
	description: `ReplicationControllerStatus represents the current status of a replication controller.`,
	properties: {
		availableReplicas: {
	type: 'number',
	description: `The number of available replicas (ready for at least minReadySeconds) for this replication controller.`,
	format: 'int32',
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_ReplicationControllerCondition',
	},
},
		fullyLabeledReplicas: {
	type: 'number',
	description: `The number of pods that have labels matching the labels of the pod template of the replication controller.`,
	format: 'int32',
},
		observedGeneration: {
	type: 'number',
	description: `ObservedGeneration reflects the generation of the most recently observed replication controller.`,
	format: 'int64',
},
		readyReplicas: {
	type: 'number',
	description: `The number of ready replicas for this replication controller.`,
	format: 'int32',
},
		replicas: {
	type: 'number',
	description: `Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller`,
	isRequired: true,
	format: 'int32',
},
	},
} as const;