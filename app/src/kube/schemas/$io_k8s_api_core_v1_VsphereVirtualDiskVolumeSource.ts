export const $io_k8s_api_core_v1_VsphereVirtualDiskVolumeSource = {
	description: `Represents a vSphere volume resource.`,
	properties: {
		fsType: {
	type: 'string',
	description: `fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.`,
},
		storagePolicyID: {
	type: 'string',
	description: `storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.`,
},
		storagePolicyName: {
	type: 'string',
	description: `storagePolicyName is the storage Policy Based Management (SPBM) profile name.`,
},
		volumePath: {
	type: 'string',
	description: `volumePath is the path that identifies vSphere volume vmdk`,
	isRequired: true,
},
	},
} as const;