import type { io_k8s_api_core_v1_ConfigMapNodeConfigSource } from './io_k8s_api_core_v1_ConfigMapNodeConfigSource';

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
 */
export type io_k8s_api_core_v1_NodeConfigSource = {
	/**
	 * ConfigMap is a reference to a Node's ConfigMap
	 */
	configMap?: io_k8s_api_core_v1_ConfigMapNodeConfigSource;
};

