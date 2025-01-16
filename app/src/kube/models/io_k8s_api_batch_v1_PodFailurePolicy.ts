import type { io_k8s_api_batch_v1_PodFailurePolicyRule } from './io_k8s_api_batch_v1_PodFailurePolicyRule';

/**
 * PodFailurePolicy describes how failed pods influence the backoffLimit.
 */
export type io_k8s_api_batch_v1_PodFailurePolicy = {
	/**
	 * A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.
	 */
	rules: Array<io_k8s_api_batch_v1_PodFailurePolicyRule>;
};

