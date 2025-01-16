import type { io_k8s_api_core_v1_NodeSelectorTerm } from './io_k8s_api_core_v1_NodeSelectorTerm';

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export type io_k8s_api_core_v1_PreferredSchedulingTerm = {
	/**
	 * A node selector term, associated with the corresponding weight.
	 */
	preference: io_k8s_api_core_v1_NodeSelectorTerm;
	/**
	 * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
	 */
	weight: number;
};

