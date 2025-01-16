export const $io_k8s_api_core_v1_PersistentVolumeClaimStatus = {
	description: `PersistentVolumeClaimStatus is the current status of a persistent volume claim.`,
	properties: {
		accessModes: {
	type: 'array',
	contains: {
	type: 'Enum',
},
},
		allocatedResourceStatuses: {
	type: 'dictionary',
	contains: {
	type: 'Enum',
},
},
		allocatedResources: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		capacity: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_PersistentVolumeClaimCondition',
	},
},
		currentVolumeAttributesClassName: {
	type: 'string',
	description: `currentVolumeAttributesClassName is the current name of the VolumeAttributesClass the PVC is using. When unset, there is no VolumeAttributeClass applied to this PersistentVolumeClaim This is an alpha field and requires enabling VolumeAttributesClass feature.`,
},
		modifyVolumeStatus: {
	type: 'io_k8s_api_core_v1_ModifyVolumeStatus',
	description: `ModifyVolumeStatus represents the status object of ControllerModifyVolume operation. When this is unset, there is no ModifyVolume operation being attempted. This is an alpha field and requires enabling VolumeAttributesClass feature.`,
},
		phase: {
	type: 'Enum',
},
	},
} as const;