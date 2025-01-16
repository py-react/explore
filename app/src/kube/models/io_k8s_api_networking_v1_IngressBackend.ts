import type { io_k8s_api_core_v1_TypedLocalObjectReference } from './io_k8s_api_core_v1_TypedLocalObjectReference';
import type { io_k8s_api_networking_v1_IngressServiceBackend } from './io_k8s_api_networking_v1_IngressServiceBackend';

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export type io_k8s_api_networking_v1_IngressBackend = {
	/**
	 * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".
	 */
	resource?: io_k8s_api_core_v1_TypedLocalObjectReference;
	/**
	 * service references a service as a backend. This is a mutually exclusive setting with "Resource".
	 */
	service?: io_k8s_api_networking_v1_IngressServiceBackend;
};

