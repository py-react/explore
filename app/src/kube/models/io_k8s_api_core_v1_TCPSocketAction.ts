import type { io_k8s_apimachinery_pkg_util_intstr_IntOrString } from './io_k8s_apimachinery_pkg_util_intstr_IntOrString';

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export type io_k8s_api_core_v1_TCPSocketAction = {
	/**
	 * Optional: Host name to connect to, defaults to the pod IP.
	 */
	host?: string;
	/**
	 * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
	 */
	port: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
};

