export const $io_k8s_api_core_v1_NFSVolumeSource = {
	description: `Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.`,
	properties: {
		path: {
	type: 'string',
	description: `path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs`,
	isRequired: true,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs`,
},
		server: {
	type: 'string',
	description: `server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs`,
	isRequired: true,
},
	},
} as const;