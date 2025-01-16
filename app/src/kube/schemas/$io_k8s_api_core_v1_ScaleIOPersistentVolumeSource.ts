export const $io_k8s_api_core_v1_ScaleIOPersistentVolumeSource = {
	description: `ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume`,
	properties: {
		fsType: {
	type: 'string',
	description: `fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs"`,
},
		gateway: {
	type: 'string',
	description: `gateway is the host address of the ScaleIO API Gateway.`,
	isRequired: true,
},
		protectionDomain: {
	type: 'string',
	description: `protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.`,
},
		secretRef: {
	type: 'io_k8s_api_core_v1_SecretReference',
	description: `secretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.`,
	isRequired: true,
},
		sslEnabled: {
	type: 'boolean',
	description: `sslEnabled is the flag to enable/disable SSL communication with Gateway, default false`,
},
		storageMode: {
	type: 'string',
	description: `storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.`,
},
		storagePool: {
	type: 'string',
	description: `storagePool is the ScaleIO Storage Pool associated with the protection domain.`,
},
		system: {
	type: 'string',
	description: `system is the name of the storage system as configured in ScaleIO.`,
	isRequired: true,
},
		volumeName: {
	type: 'string',
	description: `volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.`,
},
	},
} as const;