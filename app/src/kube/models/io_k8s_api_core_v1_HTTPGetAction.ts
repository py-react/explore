import type { io_k8s_api_core_v1_HTTPHeader } from './io_k8s_api_core_v1_HTTPHeader';
import type { io_k8s_apimachinery_pkg_util_intstr_IntOrString } from './io_k8s_apimachinery_pkg_util_intstr_IntOrString';

/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export type io_k8s_api_core_v1_HTTPGetAction = {
	/**
	 * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
	 */
	host?: string;
	/**
	 * Custom headers to set in the request. HTTP allows repeated headers.
	 */
	httpHeaders?: Array<io_k8s_api_core_v1_HTTPHeader>;
	/**
	 * Path to access on the HTTP server.
	 */
	path?: string;
	/**
	 * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
	 */
	port: io_k8s_apimachinery_pkg_util_intstr_IntOrString;
	/**
	 * Scheme to use for connecting to the host. Defaults to HTTP.
 * 
 * Possible enum values:
 * - `"HTTP"` means that the scheme used will be http://
 * - `"HTTPS"` means that the scheme used will be https://
	 */
	scheme?: 'HTTP' | 'HTTPS';
};


