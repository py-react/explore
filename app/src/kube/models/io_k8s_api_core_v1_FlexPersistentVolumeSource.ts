import type { io_k8s_api_core_v1_SecretReference } from './io_k8s_api_core_v1_SecretReference';

/**
 * FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
 */
export type io_k8s_api_core_v1_FlexPersistentVolumeSource = {
	/**
	 * driver is the name of the driver to use for this volume.
	 */
	driver: string;
	/**
	 * fsType is the Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.
	 */
	fsType?: string;
	/**
	 * options is Optional: this field holds extra command options if any.
	 */
	options?: Record<string, string>;
	/**
	 * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	 */
	readOnly?: boolean;
	/**
	 * secretRef is Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
	 */
	secretRef?: io_k8s_api_core_v1_SecretReference;
};

