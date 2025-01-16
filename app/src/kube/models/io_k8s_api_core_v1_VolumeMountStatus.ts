

/**
 * VolumeMountStatus shows status of volume mounts.
 */
export type io_k8s_api_core_v1_VolumeMountStatus = {
	/**
	 * MountPath corresponds to the original VolumeMount.
	 */
	mountPath: string;
	/**
	 * Name corresponds to the name of the original VolumeMount.
	 */
	name: string;
	/**
	 * ReadOnly corresponds to the original VolumeMount.
	 */
	readOnly?: boolean;
	/**
	 * RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.
	 */
	recursiveReadOnly?: string;
};

