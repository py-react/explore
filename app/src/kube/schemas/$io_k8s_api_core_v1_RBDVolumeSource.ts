export const $io_k8s_api_core_v1_RBDVolumeSource = {
	description: `Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.`,
	properties: {
		fsType: {
	type: 'string',
	description: `fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd`,
},
		image: {
	type: 'string',
	description: `image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it`,
	isRequired: true,
},
		keyring: {
	type: 'string',
	description: `keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it`,
},
		monitors: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		pool: {
	type: 'string',
	description: `pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it`,
},
		secretRef: {
	type: 'io_k8s_api_core_v1_LocalObjectReference',
	description: `secretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it`,
},
		user: {
	type: 'string',
	description: `user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it`,
},
	},
} as const;