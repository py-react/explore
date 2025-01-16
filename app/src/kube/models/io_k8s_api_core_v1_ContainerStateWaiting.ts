

/**
 * ContainerStateWaiting is a waiting state of a container.
 */
export type io_k8s_api_core_v1_ContainerStateWaiting = {
	/**
	 * Message regarding why the container is not yet running.
	 */
	message?: string;
	/**
	 * (brief) reason the container is not yet running.
	 */
	reason?: string;
};

