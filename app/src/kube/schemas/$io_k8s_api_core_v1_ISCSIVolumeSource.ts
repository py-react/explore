export const $io_k8s_api_core_v1_ISCSIVolumeSource = {
	description: `Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.`,
	properties: {
		chapAuthDiscovery: {
	type: 'boolean',
	description: `chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication`,
},
		chapAuthSession: {
	type: 'boolean',
	description: `chapAuthSession defines whether support iSCSI Session CHAP authentication`,
},
		fsType: {
	type: 'string',
	description: `fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi`,
},
		initiatorName: {
	type: 'string',
	description: `initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.`,
},
		iqn: {
	type: 'string',
	description: `iqn is the target iSCSI Qualified Name.`,
	isRequired: true,
},
		iscsiInterface: {
	type: 'string',
	description: `iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).`,
},
		lun: {
	type: 'number',
	description: `lun represents iSCSI Target Lun number.`,
	isRequired: true,
	format: 'int32',
},
		portals: {
	type: 'array',
	contains: {
	type: 'string',
},
},
		readOnly: {
	type: 'boolean',
	description: `readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.`,
},
		secretRef: {
	type: 'io_k8s_api_core_v1_LocalObjectReference',
	description: `secretRef is the CHAP Secret for iSCSI target and initiator authentication`,
},
		targetPortal: {
	type: 'string',
	description: `targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).`,
	isRequired: true,
},
	},
} as const;