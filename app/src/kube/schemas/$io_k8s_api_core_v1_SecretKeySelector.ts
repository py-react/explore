export const $io_k8s_api_core_v1_SecretKeySelector = {
	description: `SecretKeySelector selects a key of a Secret.`,
	properties: {
		key: {
	type: 'string',
	description: `The key of the secret to select from.  Must be a valid secret key.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names`,
},
		optional: {
	type: 'boolean',
	description: `Specify whether the Secret or its key must be defined`,
},
	},
} as const;