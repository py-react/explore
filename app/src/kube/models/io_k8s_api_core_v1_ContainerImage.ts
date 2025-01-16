

/**
 * Describe a container image
 */
export type io_k8s_api_core_v1_ContainerImage = {
	/**
	 * Names by which this image is known. e.g. ["kubernetes.example/hyperkube:v1.0.7", "cloud-vendor.registry.example/cloud-vendor/hyperkube:v1.0.7"]
	 */
	names?: Array<string>;
	/**
	 * The size of the image in bytes.
	 */
	sizeBytes?: number;
};

