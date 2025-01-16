export const $io_k8s_api_core_v1_VolumeNodeAffinity = {
	description: `VolumeNodeAffinity defines constraints that limit what nodes this volume can be accessed from.`,
	properties: {
		required: {
	type: 'io_k8s_api_core_v1_NodeSelector',
	description: `required specifies hard node constraints that must be met.`,
},
	},
} as const;