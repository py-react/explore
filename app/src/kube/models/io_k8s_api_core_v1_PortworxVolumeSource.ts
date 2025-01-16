

/**
 * PortworxVolumeSource represents a Portworx volume resource.
 */
export type io_k8s_api_core_v1_PortworxVolumeSource = {
	/**
	 * fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.
	 */
	fsType?: string;
	/**
	 * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
	 */
	readOnly?: boolean;
	/**
	 * volumeID uniquely identifies a Portworx volume
	 */
	volumeID: string;
};

