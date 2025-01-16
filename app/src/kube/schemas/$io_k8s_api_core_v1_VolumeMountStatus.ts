export const $io_k8s_api_core_v1_VolumeMountStatus = {
	description: `VolumeMountStatus shows status of volume mounts.`,
	properties: {
		mountPath: {
	type: 'string',
	description: `MountPath corresponds to the original VolumeMount.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name corresponds to the name of the original VolumeMount.`,
	isRequired: true,
},
		readOnly: {
	type: 'boolean',
	description: `ReadOnly corresponds to the original VolumeMount.`,
},
		recursiveReadOnly: {
	type: 'string',
	description: `RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.`,
},
	},
} as const;