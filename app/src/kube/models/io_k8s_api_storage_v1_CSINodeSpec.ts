import type { io_k8s_api_storage_v1_CSINodeDriver } from './io_k8s_api_storage_v1_CSINodeDriver';

/**
 * CSINodeSpec holds information about the specification of all CSI drivers installed on a node
 */
export type io_k8s_api_storage_v1_CSINodeSpec = {
	/**
	 * drivers is a list of information of all CSI Drivers existing on a node. If all drivers in the list are uninstalled, this can become empty.
	 */
	drivers: Array<io_k8s_api_storage_v1_CSINodeDriver>;
};

