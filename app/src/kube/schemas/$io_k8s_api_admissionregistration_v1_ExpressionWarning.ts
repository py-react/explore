export const $io_k8s_api_admissionregistration_v1_ExpressionWarning = {
	description: `ExpressionWarning is a warning information that targets a specific expression.`,
	properties: {
		fieldRef: {
	type: 'string',
	description: `The path to the field that refers the expression. For example, the reference to the expression of the first item of validations is "spec.validations[0].expression"`,
	isRequired: true,
},
		warning: {
	type: 'string',
	description: `The content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.`,
	isRequired: true,
},
	},
} as const;