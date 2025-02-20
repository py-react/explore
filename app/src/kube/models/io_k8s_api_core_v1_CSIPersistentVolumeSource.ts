import type { io_k8s_api_core_v1_SecretReference } from './io_k8s_api_core_v1_SecretReference';

/**
 * Represents storage that is managed by an external CSI volume driver (Beta feature)
 */
export type io_k8s_api_core_v1_CSIPersistentVolumeSource = {
	/**
	 * controllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
	 */
	controllerExpandSecretRef?: io_k8s_api_core_v1_SecretReference;
	/**
	 * controllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
	 */
	controllerPublishSecretRef?: io_k8s_api_core_v1_SecretReference;
	/**
	 * driver is the name of the driver to use for this volume. Required.
	 */
	driver: string;
	/**
	 * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
	 */
	fsType?: string;
	/**
	 * nodeExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeExpandVolume call. This field is optional, may be omitted if no secret is required. If the secret object contains more than one secret, all secrets are passed.
	 */
	nodeExpandSecretRef?: io_k8s_api_core_v1_SecretReference;
	/**
	 * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
	 */
	nodePublishSecretRef?: io_k8s_api_core_v1_SecretReference;
	/**
	 * nodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
	 */
	nodeStageSecretRef?: io_k8s_api_core_v1_SecretReference;
	/**
	 * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
	 */
	readOnly?: boolean;
	/**
	 * volumeAttributes of the volume to publish.
	 */
	volumeAttributes?: Record<string, string>;
	/**
	 * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
	 */
	volumeHandle: string;
};

