export const $io_k8s_api_core_v1_VolumeResourceRequirements = {
	description: `VolumeResourceRequirements describes the storage resource requirements for a volume.`,
	properties: {
		limits: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
		requests: {
	type: 'dictionary',
	contains: {
		type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	},
},
	},
} as const;