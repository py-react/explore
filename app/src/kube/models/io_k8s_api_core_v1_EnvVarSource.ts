import type { io_k8s_api_core_v1_ConfigMapKeySelector } from './io_k8s_api_core_v1_ConfigMapKeySelector';
import type { io_k8s_api_core_v1_ObjectFieldSelector } from './io_k8s_api_core_v1_ObjectFieldSelector';
import type { io_k8s_api_core_v1_ResourceFieldSelector } from './io_k8s_api_core_v1_ResourceFieldSelector';
import type { io_k8s_api_core_v1_SecretKeySelector } from './io_k8s_api_core_v1_SecretKeySelector';

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export type io_k8s_api_core_v1_EnvVarSource = {
	/**
	 * Selects a key of a ConfigMap.
	 */
	configMapKeyRef?: io_k8s_api_core_v1_ConfigMapKeySelector;
	/**
	 * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
	 */
	fieldRef?: io_k8s_api_core_v1_ObjectFieldSelector;
	/**
	 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
	 */
	resourceFieldRef?: io_k8s_api_core_v1_ResourceFieldSelector;
	/**
	 * Selects a key of a secret in the pod's namespace
	 */
	secretKeyRef?: io_k8s_api_core_v1_SecretKeySelector;
};

