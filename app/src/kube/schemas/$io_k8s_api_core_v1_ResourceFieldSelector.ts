export const $io_k8s_api_core_v1_ResourceFieldSelector = {
	description: `ResourceFieldSelector represents container resources (cpu, memory) and their output format`,
	properties: {
		containerName: {
	type: 'string',
	description: `Container name: required for volumes, optional for env vars`,
},
		divisor: {
	type: 'io_k8s_apimachinery_pkg_api_resource_Quantity',
	description: `Specifies the output format of the exposed resources, defaults to "1"`,
},
		resource: {
	type: 'string',
	description: `Required: resource to select`,
	isRequired: true,
},
	},
} as const;