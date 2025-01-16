export const $io_k8s_api_core_v1_FCVolumeSource = {
	description: `Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.`,
	properties: {
		fsType: {
	type: 'string',
	description: `fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.`,
},
		lun: {
	type: 'number',
	description: `lun is Optional: FC target lun number`,
	format: 'int32',
},
		readOnly: {
	type: 'boolean',
	description: `readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.`,
},
		targetWWNs: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		wwids: {
	type: 'array',
	contains: {
	type: 'string',
},
},
	},
} as const;