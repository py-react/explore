import type { io_k8s_api_core_v1_ConfigMapEnvSource } from './io_k8s_api_core_v1_ConfigMapEnvSource';
import type { io_k8s_api_core_v1_SecretEnvSource } from './io_k8s_api_core_v1_SecretEnvSource';

/**
 * EnvFromSource represents the source of a set of ConfigMaps
 */
export type io_k8s_api_core_v1_EnvFromSource = {
	/**
	 * The ConfigMap to select from
	 */
	configMapRef?: io_k8s_api_core_v1_ConfigMapEnvSource;
	/**
	 * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
	 */
	prefix?: string;
	/**
	 * The Secret to select from
	 */
	secretRef?: io_k8s_api_core_v1_SecretEnvSource;
};

