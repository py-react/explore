export const $io_k8s_api_core_v1_ConfigMapProjection = {
	description: `Adapts a ConfigMap into a projected volume.

The contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.`,
	properties: {
		items: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_core_v1_KeyToPath',
	},
},
		name: {
	type: 'string',
	description: `Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
},
		optional: {
	type: 'boolean',
	description: `optional specify whether the ConfigMap or its keys must be defined`,
},
	},
} as const;