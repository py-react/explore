export const $io_k8s_api_core_v1_ConfigMapEnvSource = {
	description: `ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.

The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.`,
	properties: {
		name: {
	type: 'string',
	description: `Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
},
		optional: {
	type: 'boolean',
	description: `Specify whether the ConfigMap must be defined`,
},
	},
} as const;