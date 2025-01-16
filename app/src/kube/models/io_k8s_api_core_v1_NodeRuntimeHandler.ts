import type { io_k8s_api_core_v1_NodeRuntimeHandlerFeatures } from './io_k8s_api_core_v1_NodeRuntimeHandlerFeatures';

/**
 * NodeRuntimeHandler is a set of runtime handler information.
 */
export type io_k8s_api_core_v1_NodeRuntimeHandler = {
	/**
	 * Supported features.
	 */
	features?: io_k8s_api_core_v1_NodeRuntimeHandlerFeatures;
	/**
	 * Runtime handler name. Empty for the default runtime handler.
	 */
	name?: string;
};

