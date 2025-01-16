import type { io_k8s_api_core_v1_ObjectReference } from './io_k8s_api_core_v1_ObjectReference';

/**
 * EndpointAddress is a tuple that describes single IP address.
 */
export type io_k8s_api_core_v1_EndpointAddress = {
	/**
	 * The Hostname of this endpoint
	 */
	hostname?: string;
	/**
	 * The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
	 */
	ip: string;
	/**
	 * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
	 */
	nodeName?: string;
	/**
	 * Reference to object providing the endpoint.
	 */
	targetRef?: io_k8s_api_core_v1_ObjectReference;
};

