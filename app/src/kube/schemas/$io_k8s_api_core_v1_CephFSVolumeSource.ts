export const $io_k8s_api_core_v1_CephFSVolumeSource = {
	description: `Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.`,
	properties: {
		monitors: {
	type: 'array',
	contains: {
	type: 'string',
},
	isRequired: true,
},
		path: {
	type: 'string',
	description: `path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /`,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it`,
},
		secretFile: {
	type: 'string',
	description: `secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it`,
},
		secretRef: {
	type: 'io_k8s_api_core_v1_LocalObjectReference',
	description: `secretRef is Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it`,
},
		user: {
	type: 'string',
	description: `user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it`,
},
	},
} as const;