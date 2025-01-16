import type { io_k8s_api_core_v1_ClientIPConfig } from './io_k8s_api_core_v1_ClientIPConfig';

/**
 * SessionAffinityConfig represents the configurations of session affinity.
 */
export type io_k8s_api_core_v1_SessionAffinityConfig = {
	/**
	 * clientIP contains the configurations of Client IP based session affinity.
	 */
	clientIP?: io_k8s_api_core_v1_ClientIPConfig;
};

