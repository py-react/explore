export const $io_k8s_api_core_v1_PortworxVolumeSource = {
	description: `PortworxVolumeSource represents a Portworx volume resource.`,
	properties: {
		fsType: {
	type: 'string',
	description: `fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.`,
},
		volumeID: {
	type: 'string',
	description: `volumeID uniquely identifies a Portworx volume`,
	isRequired: true,
},
	},
} as const;