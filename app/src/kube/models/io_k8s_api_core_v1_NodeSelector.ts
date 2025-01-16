import type { io_k8s_api_core_v1_NodeSelectorTerm } from './io_k8s_api_core_v1_NodeSelectorTerm';

/**
 * A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
 */
export type io_k8s_api_core_v1_NodeSelector = {
	/**
	 * Required. A list of node selector terms. The terms are ORed.
	 */
	nodeSelectorTerms: Array<io_k8s_api_core_v1_NodeSelectorTerm>;
};

