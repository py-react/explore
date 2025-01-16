export const $io_k8s_api_admissionregistration_v1_Variable = {
	description: `Variable is the definition of a variable that is used for composition. A variable is defined as a named expression.`,
	properties: {
		expression: {
	type: 'string',
	description: `Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.`,
	isRequired: true,
},
		name: {
	type: 'string',
	description: `Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through \`variables\` For example, if name is "foo", the variable will be available as \`variables.foo\``,
	isRequired: true,
},
	},
} as const;