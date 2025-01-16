import type { io_k8s_apimachinery_pkg_apis_meta_v1_Time } from './io_k8s_apimachinery_pkg_apis_meta_v1_Time';

/**
 * ContainerStateTerminated is a terminated state of a container.
 */
export type io_k8s_api_core_v1_ContainerStateTerminated = {
	/**
	 * Container's ID in the format '<type>://<container_id>'
	 */
	containerID?: string;
	/**
	 * Exit status from the last termination of the container
	 */
	exitCode: number;
	/**
	 * Time at which the container last terminated
	 */
	finishedAt?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
	/**
	 * Message regarding the last termination of the container
	 */
	message?: string;
	/**
	 * (brief) reason from the last termination of the container
	 */
	reason?: string;
	/**
	 * Signal from the last termination of the container
	 */
	signal?: number;
	/**
	 * Time at which previous execution of the container started
	 */
	startedAt?: io_k8s_apimachinery_pkg_apis_meta_v1_Time;
};

