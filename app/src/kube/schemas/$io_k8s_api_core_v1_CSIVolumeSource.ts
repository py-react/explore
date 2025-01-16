export const $io_k8s_api_core_v1_CSIVolumeSource = {
	description: `Represents a source location of a volume to mount, managed by an external CSI driver`,
	properties: {
		driver: {
	type: 'string',
	description: `driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.`,
	isRequired: true,
},
		fsType: {
	type: 'string',
	description: `fsType to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.`,
},
		nodePublishSecretRef: {
	type: 'io_k8s_api_core_v1_LocalObjectReference',
	description: `nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).`,
},
		volumeAttributes: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
	},
} as const;