export const $io_k8s_api_core_v1_ConfigMapKeySelector = {
	description: `Selects a key from a ConfigMap.`,
	properties: {
		key: {
	type: 'string',
	description: `The key to select.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
},
		optional: {
	type: 'boolean',
	description: `Specify whether the ConfigMap or its key must be defined`,
},
	},
} as const;