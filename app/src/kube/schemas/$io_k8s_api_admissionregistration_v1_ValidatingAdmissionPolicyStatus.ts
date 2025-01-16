export const $io_k8s_api_admissionregistration_v1_ValidatingAdmissionPolicyStatus = {
	description: `ValidatingAdmissionPolicyStatus represents the status of an admission validation policy.`,
	properties: {
		conditions: {
	type: 'array',
	contains: {
		type: 'io_k8s_apimachinery_pkg_apis_meta_v1_Condition',
	},
},
		observedGeneration: {
	type: 'number',
	description: `The generation observed by the controller.`,
	format: 'int64',
},
		typeChecking: {
	type: 'io_k8s_api_admissionregistration_v1_TypeChecking',
	description: `The results of type checking for each expression. Presence of this field indicates the completion of the type checking.`,
},
	},
} as const;