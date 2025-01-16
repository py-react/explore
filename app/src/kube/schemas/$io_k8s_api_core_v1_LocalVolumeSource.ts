export const $io_k8s_api_core_v1_LocalVolumeSource = {
	description: `Local represents directly-attached storage with node affinity (Beta feature)`,
	properties: {
		fsType: {
	type: 'string',
	description: `fsType is the filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a filesystem if unspecified.`,
},
		path: {
	type: 'string',
	description: `path of the full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).`,
	isRequired: true,
},
	},
} as const;