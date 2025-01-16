export const $io_k8s_api_apps_v1_StatefulSetStatus = {
	description: `StatefulSetStatus represents the current state of a StatefulSet.`,
	properties: {
		availableReplicas: {
	type: 'number',
	description: `Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset.`,
	format: 'int32',
},
		collisionCount: {
	type: 'number',
	description: `collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.`,
	format: 'int32',
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_apps_v1_StatefulSetCondition',
	},
},
		currentReplicas: {
	type: 'number',
	description: `currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.`,
	format: 'int32',
},
		currentRevision: {
	type: 'string',
	description: `currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).`,
},
		observedGeneration: {
	type: 'number',
	description: `observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet's generation, which is updated on mutation by the API Server.`,
	format: 'int64',
},
		readyReplicas: {
	type: 'number',
	description: `readyReplicas is the number of pods created for this StatefulSet with a Ready Condition.`,
	format: 'int32',
},
		replicas: {
	type: 'number',
	description: `replicas is the number of Pods created by the StatefulSet controller.`,
	isRequired: true,
	format: 'int32',
},
		updateRevision: {
	type: 'string',
	description: `updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)`,
},
		updatedReplicas: {
	type: 'number',
	description: `updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.`,
	format: 'int32',
},
	},
} as const;