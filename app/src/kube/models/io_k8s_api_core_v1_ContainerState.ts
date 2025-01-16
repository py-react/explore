import type { io_k8s_api_core_v1_ContainerStateRunning } from './io_k8s_api_core_v1_ContainerStateRunning';
import type { io_k8s_api_core_v1_ContainerStateTerminated } from './io_k8s_api_core_v1_ContainerStateTerminated';
import type { io_k8s_api_core_v1_ContainerStateWaiting } from './io_k8s_api_core_v1_ContainerStateWaiting';

/**
 * ContainerState holds a possible state of container. Only one of its members may be specified. If none of them is specified, the default one is ContainerStateWaiting.
 */
export type io_k8s_api_core_v1_ContainerState = {
	/**
	 * Details about a running container
	 */
	running?: io_k8s_api_core_v1_ContainerStateRunning;
	/**
	 * Details about a terminated container
	 */
	terminated?: io_k8s_api_core_v1_ContainerStateTerminated;
	/**
	 * Details about a waiting container
	 */
	waiting?: io_k8s_api_core_v1_ContainerStateWaiting;
};

