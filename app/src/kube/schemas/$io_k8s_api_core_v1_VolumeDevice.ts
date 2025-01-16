export const $io_k8s_api_core_v1_VolumeDevice = {
	description: `volumeDevice describes a mapping of a raw block device within a container.`,
	properties: {
		devicePath: {
	type: 'string',
	description: `devicePath is the path inside of the container that the device will be mapped to.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `name must match the name of a persistentVolumeClaim in the pod`,
	isRequired: true,
},
	},
} as const;