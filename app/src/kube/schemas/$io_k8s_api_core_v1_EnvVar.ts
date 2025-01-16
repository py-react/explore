export const $io_k8s_api_core_v1_EnvVar = {
	description: `EnvVar represents an environment variable present in a Container.`,
	properties: {
		name: {
	type: 'string',
	description: `Name of the environment variable. Must be a C_IDENTIFIER.`,
	isRequired: true,
},
		value: {
	type: 'string',
	description: `Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".`,
},
		valueFrom: {
	type: 'io_k8s_api_core_v1_EnvVarSource',
	description: `Source for the environment variable's value. Cannot be used if value is not empty.`,
},
	},
} as const;