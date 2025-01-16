export const $io_k8s_api_core_v1_HostPathVolumeSource = {
	description: `Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.`,
	properties: {
		path: {
	type: 'string',
	description: `path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath`,
	isRequired: true,
},
		type: {
	type: 'Enum',
},
	},
} as const;