export const $io_k8s_api_admissionregistration_v1_TypeChecking = {
	description: `TypeChecking contains results of type checking the expressions in the ValidatingAdmissionPolicy`,
	properties: {
		expressionWarnings: {
	type: 'array',
	contains: {
		type: 'io_k8s_api_admissionregistration_v1_ExpressionWarning',
	},
},
	},
} as const;