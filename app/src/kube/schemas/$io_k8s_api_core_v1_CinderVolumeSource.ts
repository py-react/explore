export const $io_k8s_api_core_v1_CinderVolumeSource = {
	description: `Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.`,
	properties: {
		fsType: {
	type: 'string',
	description: `fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md`,
},
		secretRef: {
	type: 'io_k8s_api_core_v1_LocalObjectReference',
	description: `secretRef is optional: points to a secret object containing parameters used to connect to OpenStack.`,
},
		volumeID: {
	type: 'string',
	description: `volumeID used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md`,
	isRequired: true,
},
	},
} as const;