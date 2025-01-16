export const $io_k8s_api_policy_v1_PodDisruptionBudgetStatus = {
	description: `PodDisruptionBudgetStatus represents information about the status of a PodDisruptionBudget. Status may trail the actual state of a system.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Condition',
	},
},
		currentHealthy: {
	type: 'number',
	description: `current number of healthy pods`,
	isRequired: true,
	format: 'int32',
},
		desiredHealthy: {
	type: 'number',
	description: `minimum desired number of healthy pods`,
	isRequired: true,
	format: 'int32',
},
		disruptedPods: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	},
},
		disruptionsAllowed: {
	type: 'number',
	description: `Number of pod disruptions that are currently allowed.`,
	isRequired: true,
	format: 'int32',
},
		expectedPods: {
	type: 'number',
	description: `total number of pods counted by this disruption budget`,
	isRequired: true,
	format: 'int32',
},
		observedGeneration: {
	type: 'number',
	description: `Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB's object generation.`,
	format: 'int64',
},
	},
} as const;