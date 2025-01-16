

/**
 * UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
 */
export type io_k8s_api_batch_v1_UncountedTerminatedPods = {
	/**
	 * failed holds UIDs of failed Pods.
	 */
	failed?: Array<string>;
	/**
	 * succeeded holds UIDs of succeeded Pods.
	 */
	succeeded?: Array<string>;
};

