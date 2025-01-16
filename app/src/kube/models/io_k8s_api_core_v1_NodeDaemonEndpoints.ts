import type { io_k8s_api_core_v1_DaemonEndpoint } from './io_k8s_api_core_v1_DaemonEndpoint';

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export type io_k8s_api_core_v1_NodeDaemonEndpoints = {
	/**
	 * Endpoint on which Kubelet is listening.
	 */
	kubeletEndpoint?: io_k8s_api_core_v1_DaemonEndpoint;
};

