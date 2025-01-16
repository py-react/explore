export const $io_k8s_api_core_v1_ObjectFieldSelector = {
	description: `ObjectFieldSelector selects an APIVersioned field of an object.`,
	properties: {
		apiVersion: {
	type: 'string',
	description: `Version of the schema the FieldPath is written in terms of, defaults to "v1".`,
},
		fieldPath: {
	type: 'string',
	description: `Path of the field to select in the specified API version.`,
	isRequired: true,
},
	},
} as const;