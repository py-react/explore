export const $io_k8s_api_core_v1_FlexPersistentVolumeSource = {
	description: `FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.`,
	properties: {
		driver: {
	type: 'string',
	description: `driver is the name of the driver to use for this volume.`,
	isRequired: true,
},
		fsType: {
	type: 'string',
	description: `fsType is the Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.`,
},
		options: {
	type: 'dictionary',
	contains: {
	type: 'string',
},
},
		readOnly: {
	type: 'boolean',
	description: `readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.`,
},
		secretRef: {
	type: 'io_k8s_api_core_v1_SecretReference',
	description: `secretRef is Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.`,
},
	},
} as const;