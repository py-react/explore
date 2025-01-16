export const $io_k8s_api_apps_v1_DeploymentStatus = {
	description: `DeploymentStatus is the most recently observed status of the Deployment.`,
	properties: {
		availableReplicas: {
	type: 'number',
	description: `Total number of available pods (ready for at least minReadySeconds) targeted by this deployment.`,
	format: 'int32',
},
		collisionCount: {
	type: 'number',
	description: `Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.`,
	format: 'int32',
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_apps_v1_DeploymentCondition',
	},
},
		observedGeneration: {
	type: 'number',
	description: `The generation observed by the deployment controller.`,
	format: 'int64',
},
		readyReplicas: {
	type: 'number',
	description: `readyReplicas is the number of pods targeted by this Deployment with a Ready Condition.`,
	format: 'int32',
},
		replicas: {
	type: 'number',
	description: `Total number of non-terminated pods targeted by this deployment (their labels match the selector).`,
	format: 'int32',
},
		unavailableReplicas: {
	type: 'number',
	description: `Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.`,
	format: 'int32',
},
		updatedReplicas: {
	type: 'number',
	description: `Total number of non-terminated pods targeted by this deployment that have the desired template spec.`,
	format: 'int32',
},
	},
} as const;