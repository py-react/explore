export const $io_k8s_api_batch_v1_JobStatus = {
	description: `JobStatus represents the current state of a Job.`,
	properties: {
		active: {
	type: 'number',
	description: `The number of pending and running pods which are not terminating (without a deletionTimestamp). The value is zero for finished jobs.`,
	format: 'int32',
},
		completedIndexes: {
	type: 'string',
	description: `completedIndexes holds the completed indexes when .spec.completionMode = "Indexed" in a text format. The indexes are represented as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the completed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7".`,
},
		completionTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. The completion time is set when the job finishes successfully, and only then. The value cannot be updated or removed. The value indicates the same or later point in time as the startTime field.`,
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_batch_v1_JobCondition',
	},
},
		failed: {
	type: 'number',
	description: `The number of pods which reached phase Failed. The value increases monotonically.`,
	format: 'int32',
},
		failedIndexes: {
	type: 'string',
	description: `FailedIndexes holds the failed indexes when spec.backoffLimitPerIndex is set. The indexes are represented in the text format analogous as for the \`completedIndexes\` field, ie. they are kept as decimal integers separated by commas. The numbers are listed in increasing order. Three or more consecutive numbers are compressed and represented by the first and last element of the series, separated by a hyphen. For example, if the failed indexes are 1, 3, 4, 5 and 7, they are represented as "1,3-5,7". The set of failed indexes cannot overlap with the set of completed indexes.

This field is beta-level. It can be used when the \`JobBackoffLimitPerIndex\` feature gate is enabled (enabled by default).`,
},
		ready: {
	type: 'number',
	description: `The number of pods which have a Ready condition.`,
	format: 'int32',
},
		startTime: {
	type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Time',
	description: `Represents time when the job controller started processing a job. When a Job is created in the suspended state, this field is not set until the first time it is resumed. This field is reset every time a Job is resumed from suspension. It is represented in RFC3339 form and is in UTC.

Once set, the field can only be removed when the job is suspended. The field cannot be modified while the job is unsuspended or finished.`,
},
		succeeded: {
	type: 'number',
	description: `The number of pods which reached phase Succeeded. The value increases monotonically for a given spec. However, it may decrease in reaction to scale down of elastic indexed jobs.`,
	format: 'int32',
},
		terminating: {
	type: 'number',
	description: `The number of pods which are terminating (in phase Pending or Running and have a deletionTimestamp).

This field is beta-level. The job controller populates the field when the feature gate JobPodReplacementPolicy is enabled (enabled by default).`,
	format: 'int32',
},
		uncountedTerminatedPods: {
	type: 'io_k8s_api_batch_v1_UncountedTerminatedPods',
	description: `uncountedTerminatedPods holds the UIDs of Pods that have terminated but the job controller hasn't yet accounted for in the status counters.

The job controller creates pods with a finalizer. When a pod terminates (succeeded or failed), the controller does three steps to account for it in the job status:

1. Add the pod UID to the arrays in this field. 2. Remove the pod finalizer. 3. Remove the pod UID from the arrays while increasing the corresponding
    counter.

Old jobs might not be tracked using this field, in which case the field remains null. The structure is empty for finished jobs.`,
},
	},
} as const;