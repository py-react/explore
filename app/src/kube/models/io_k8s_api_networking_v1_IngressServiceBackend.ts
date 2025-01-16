import type { io_k8s_api_networking_v1_ServiceBackendPort } from './io_k8s_api_networking_v1_ServiceBackendPort';

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export type io_k8s_api_networking_v1_IngressServiceBackend = {
	/**
	 * name is the referenced service. The service must exist in the same namespace as the Ingress object.
	 */
	name: string;
	/**
	 * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
	 */
	port?: io_k8s_api_networking_v1_ServiceBackendPort;
};

