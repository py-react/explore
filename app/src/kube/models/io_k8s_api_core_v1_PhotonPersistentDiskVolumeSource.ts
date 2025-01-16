

/**
 * Represents a Photon Controller persistent disk resource.
 */
export type io_k8s_api_core_v1_PhotonPersistentDiskVolumeSource = {
	/**
	 * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
	 */
	fsType?: string;
	/**
	 * pdID is the ID that identifies Photon Controller persistent disk
	 */
	pdID: string;
};

