export const $io_k8s_api_core_v1_AzureDiskVolumeSource = {
	description: `AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.`,
	properties: {
		cachingMode: {
	type: 'Enum',
},
		diskName: {
	type: 'string',
	description: `diskName is the Name of the data disk in the blob storage`,
	isRequired: true,
},
		diskURI: {
	type: 'string',
	description: `diskURI is the URI of data disk in the blob storage`,
	isRequired: true,
},
		fsType: {
	type: 'string',
	description: `fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.`,
},
		kind: {
	type: 'Enum',
},
		readOnly: {
	type: 'boolean',
	description: `readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.`,
},
	},
} as const;