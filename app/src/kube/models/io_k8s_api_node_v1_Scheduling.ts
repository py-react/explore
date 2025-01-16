import type { io_k8s_api_core_v1_Toleration } from './io_k8s_api_core_v1_Toleration';

/**
 * Scheduling specifies the scheduling constraints for nodes supporting a RuntimeClass.
 */
export type io_k8s_api_node_v1_Scheduling = {
	/**
	 * nodeSelector lists labels that must be present on nodes that support this RuntimeClass. Pods using this RuntimeClass can only be scheduled to a node matched by this selector. The RuntimeClass nodeSelector is merged with a pod's existing nodeSelector. Any conflicts will cause the pod to be rejected in admission.
	 */
	nodeSelector?: Record<string, string>;
	/**
	 * tolerations are appended (excluding duplicates) to pods running with this RuntimeClass during admission, effectively unioning the set of nodes tolerated by the pod and the RuntimeClass.
	 */
	tolerations?: Array<io_k8s_api_core_v1_Toleration>;
};

