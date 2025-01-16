export const $io_k8s_api_core_v1_GlusterfsVolumeSource = {
	description: `Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.`,
	properties: {
		endpoints: {
	type: 'string',
	description: `endpoints is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod`,
	isRequired: true,
},
		path: {
	type: 'string',
	description: `path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod`,
	isRequired: true,
},
		readOnly: {
	type: 'boolean',
	description: `readOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod`,
},
	},
} as const;