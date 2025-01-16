export const $io_k8s_api_core_v1_CSIPersistentVolumeSource = {
	description: `Represents storage that is managed by an external CSI volume driver (Beta feature)`,
	properties: {
		controllerExpandSecretRef: {
	type: 'io_k8s_api_core_v1_SecretReference',
	description: `controllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.`,
},
		controllerPublishSecretRef: {
	type: 'io_k8s_api_core_v1_SecretReference',
	description: `controllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.`,
},
		driver: {
	type: 'string',
	description: `driver is the name of the driver to use for this volume. Required.`,
	isRequired: true,
},
		fsType: {
	type: 'string',
	description: `fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".`,
},
		nodeExpandSecretRef: {
	type: 'io_k8s_api_core_v1_SecretReference',
	description: `nodeExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeExpandVolume call. This field is optional, may be omitted if no secret is required. If the secret object contains more than one secret, all secrets are passed.`,
},
		nodePublishSecretRef: {
	type: 'io_k8s_api_core_v1_SecretReference',
	description: `nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.`,
},
		nodeStageSecretRef: {
	type: 'io_k8s_api_core_v1_SecretReference',
	description: `nodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).`,
},
		volumeAttributes: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		volumeHandle: {
	type: 'string',
	description: `volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.`,
	isRequired: true,
},
	},
} as const;