import type { io_k8s_api_core_v1_NodeSelectorRequirement } from './io_k8s_api_core_v1_NodeSelectorRequirement';

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export type io_k8s_api_core_v1_NodeSelectorTerm = {
	/**
	 * A list of node selector requirements by node's labels.
	 */
	matchExpressions?: Array<io_k8s_api_core_v1_NodeSelectorRequirement>;
	/**
	 * A list of node selector requirements by node's fields.
	 */
	matchFields?: Array<io_k8s_api_core_v1_NodeSelectorRequirement>;
};

