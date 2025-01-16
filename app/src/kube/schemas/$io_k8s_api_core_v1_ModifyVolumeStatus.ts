export const $io_k8s_api_core_v1_ModifyVolumeStatus = {
	description: `ModifyVolumeStatus represents the status object of ControllerModifyVolume operation`,
	properties: {
		status: {
	type: 'Enum',
	isRequired: true,
},
		targetVolumeAttributesClassName: {
	type: 'string',
	description: `targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled`,
},
	},
} as const;