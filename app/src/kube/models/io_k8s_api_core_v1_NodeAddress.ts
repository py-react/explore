

/**
 * NodeAddress contains information for the node's address.
 */
export type io_k8s_api_core_v1_NodeAddress = {
	/**
	 * The node address.
	 */
	address: string;
	/**
	 * Node address type, one of Hostname, ExternalIP or InternalIP.
	 */
	type: string;
};

