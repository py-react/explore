export const $io_k8s_api_apps_v1_DaemonSetStatus = {
	description: `DaemonSetStatus represents the current status of a daemon set.`,
	properties: {
		collisionCount: {
	type: 'number',
	description: `Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.`,
	format: 'int32',
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_apps_v1_DaemonSetCondition',
	},
},
		currentNumberScheduled: {
	type: 'number',
	description: `The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/`,
	isRequired: true,
	format: 'int32',
},
		desiredNumberScheduled: {
	type: 'number',
	description: `The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/`,
	isRequired: true,
	format: 'int32',
},
		numberAvailable: {
	type: 'number',
	description: `The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds)`,
	format: 'int32',
},
		numberMisscheduled: {
	type: 'number',
	description: `The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/`,
	isRequired: true,
	format: 'int32',
},
		numberReady: {
	type: 'number',
	description: `numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition.`,
	isRequired: true,
	format: 'int32',
},
		numberUnavailable: {
	type: 'number',
	description: `The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds)`,
	format: 'int32',
},
		observedGeneration: {
	type: 'number',
	description: `The most recent generation observed by the daemon set controller.`,
	format: 'int64',
},
		updatedNumberScheduled: {
	type: 'number',
	description: `The total number of nodes that are running updated daemon pod`,
	format: 'int32',
},
	},
} as const;