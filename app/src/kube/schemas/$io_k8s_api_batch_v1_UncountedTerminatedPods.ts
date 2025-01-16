export const $io_k8s_api_batch_v1_UncountedTerminatedPods = {
	description: `UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.`,
	properties: {
		failed: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		succeeded: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;