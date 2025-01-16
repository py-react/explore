export const $io_k8s_api_apps_v1_ReplicaSetStatus = {
	description: `ReplicaSetStatus represents the current status of a ReplicaSet.`,
	properties: {
		availableReplicas: {
	type: 'number',
	description: `The number of available replicas (ready for at least minReadySeconds) for this replica set.`,
	format: 'int32',
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_apps_v1_ReplicaSetCondition',
	},
},
		fullyLabeledReplicas: {
	type: 'number',
	description: `The number of pods that have labels matching the labels of the pod template of the replicaset.`,
	format: 'int32',
},
		observedGeneration: {
	type: 'number',
	description: `ObservedGeneration reflects the generation of the most recently observed ReplicaSet.`,
	format: 'int64',
},
		readyReplicas: {
	type: 'number',
	description: `readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition.`,
	format: 'int32',
},
		replicas: {
	type: 'number',
	description: `Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller`,
	isRequired: true,
	format: 'int32',
},
	},
} as const;