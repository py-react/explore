export const $io_k8s_api_core_v1_AttachedVolume = {
	description: `AttachedVolume describes a volume attached to a node`,
	properties: {
		devicePath: {
	type: 'string',
	description: `DevicePath represents the device path where the volume should be available`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name of the attached volume`,
	isRequired: true,
},
	},
} as const;